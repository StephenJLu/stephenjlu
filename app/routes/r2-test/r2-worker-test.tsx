import { useEffect, useState } from 'react';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { Form, useActionData, useLoaderData, useNavigate } from '@remix-run/react';
import { Button } from '~/components/button/button';
import { Input } from '~/components/input/input';
import { json } from '@remix-run/cloudflare';

interface ActionData {
  success?: boolean;
  errors?: {
    name?: string;
    comment?: string;
    turnstile?: string;
  };
}

interface Comment {
  name: string;
  comment: string;
  timestamp: string;
}

interface LoaderData {
  comments: Comment[];
}

export const loader = async () => {
  try {
    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json');
    const comments = await response.json();
    return json<LoaderData>({ comments: comments || [] });
  } catch (error) {
    return json<LoaderData>({ comments: [] });
  }
};

export const action = async ({ request, context }: { request: Request; context: any }) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const comment = formData.get('comment') as string;
  const token = formData.get('cf-turnstile-response') as string;

  // Verify Turnstile
  const verificationResult = await verifyTurnstileToken(token);
  if ('success' in verificationResult && !verificationResult.success) {
    return json<ActionData>({ 
      success: false, 
      errors: { turnstile: 'Please complete the CAPTCHA' } 
    });
  }

  // Validate inputs
  if (!name || !comment) {
    return json<ActionData>({
      success: false,
      errors: {
        name: !name ? 'Name is required' : undefined,
        comment: !comment ? 'Comment is required' : undefined,
      },
    });
  }

  try {
    const timestamp = new Date().toISOString();
    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.env.AUTH_KEY_SECRET,
      },
      body: JSON.stringify({ 
        name, 
        comment, 
        timestamp 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save comment');
    }
    return json<ActionData>({ success: true });
  } catch (error) {
    return json<ActionData>({ 
      success: false, 
      errors: { comment: 'Failed to save comment' } 
    });
  }
};

export const R2WorkerTest = () => {
  const loaderData = useLoaderData<typeof loader>();
  const comments = loaderData?.comments || [];
  const navigate = useNavigate();
  const actionData = useActionData<ActionData>();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  useEffect(() => {
    if (actionData?.success) {
      // Refresh page to show new comments
      navigate('.', { replace: true });
    }
  }, [actionData?.success, navigate]);


  return (
    <div data-theme="dark" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '6rem'
    }}>
      <h1>R2 Comments Test</h1>
      <Form method="post" style={{ 
        width: '100%',
        maxWidth: '600px',
        marginTop: '2rem' 
      }}>
       <Input
          required
          label="Name"
          name="name"
          id="name"
          error={actionData?.errors?.name}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          multiline={false}
          maxLength={255}
          type="text"
          autoComplete="off" className={undefined} style={undefined} onBlur={undefined}        />
        <Input
          required
          label="Comment"
          name="comment"
          id="comment"
          multiline
          error={actionData?.errors?.comment}
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
          maxLength={255}
          type="text"
          autoComplete="off" className={undefined} style={undefined} onBlur={undefined}        />
          <br />
        <Turnstile
          theme="dark"
          style={{ marginBottom: '1rem' }}
          success={actionData?.success}
        />
        <Button
          icon="send"
          type="submit"
        >
          Submit Comment
        </Button>
      </Form>

      <div style={{ 
        width: '100%',
        maxWidth: '600px',
        marginTop: '2rem'
      }}>
        <h2>Comments</h2>
        {comments.length === 0 ? (
          <div>No comments yet!</div>
        ) : (
          comments.map((comment: Comment, index: number) => (
          <div key={index} style={{ 
            padding: '1rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #333'
          }}>
            <strong>{comment.name}</strong>
            <p>{comment.comment}</p>
            <small style={{ color: '#666' }}>
              {formatDate(comment.timestamp)}
            </small>
          </div>
       ))
        )}
      </div>
    </div>
  );
};