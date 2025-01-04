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

export const loader = async ({ context }: { context: any }) => {
  try {
    console.log('Fetching comments...');
    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.cloudflare.env.AUTH_KEY_SECRET
      }
    });
    
    console.log('Response status:', response.status);
    const text = await response.text();
    console.log('Raw response:', text);
    
    const comments = text ? JSON.parse(text) : [];
    console.log('Parsed comments:', comments);
    
    return json<LoaderData>({ comments });
  } catch (error) {
    console.error('Loader error:', error);
    return json<LoaderData>({ comments: [] });
  }
};

export const action = async ({ request, context }: { request: Request; context: any }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;
    const token = formData.get('cf-turnstile-response') as string;

    console.log('Submitting comment:', { name, comment });

    // Verify Turnstile
    const verificationResult = await verifyTurnstileToken(token);
    console.log('Turnstile verification:', verificationResult);

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

    const timestamp = new Date().toISOString();
    console.log('Sending to worker:', { name, comment, timestamp });

    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.cloudflare.env.AUTH_KEY_SECRET,
      },
      body: JSON.stringify({ 
        name, 
        comment, 
        timestamp 
      }),
    });

    console.log('Worker response:', response.status);
    const responseData = await response.text();
    console.log('Worker response data:', responseData);

    if (!response.ok) {
      throw new Error(`Failed to save comment: ${response.status} ${responseData}`);
    }

    return json<ActionData>({ success: true });
  } catch (error) {
    console.error('Action error:', error);
    return json<ActionData>({ 
      success: false, 
      errors: { comment: 'Failed to save comment' } 
    });
  }
};

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

export const R2WorkerTest = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<ActionData>();
  const comments = loaderData?.comments || [];
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      setName('');
      setComment('');
      // Force reload of page data
      navigate('.', { replace: true });
    }
  }, [actionData?.success, navigate]);

  console.log('Render comments:', comments);

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

      {actionData?.success && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          ✓ Comment submitted successfully
        </div>
      )}
      {actionData?.errors && (
        <div style={{ marginTop: '1rem', color: 'red' }}>
          ✗ {Object.values(actionData.errors).filter(Boolean).join(', ')}
        </div>
      )}

      <div style={{ width: '100%', maxWidth: '600px', marginTop: '2rem' }}>
      <h2>Comments ({comments.length})</h2>
      {comments.length === 0 ? (
        <div>No comments yet!</div>
      ) : (
        comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
            <strong>{comment.name}</strong>
            <p>{comment.comment}</p>
            <small>{formatDate(comment.timestamp)}</small>
          </div>
        ))
      )}
    </div>
    </div>
  );
};