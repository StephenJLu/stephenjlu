import { useEffect } from 'react';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { Form, useActionData, useLoaderData, useNavigate } from '@remix-run/react';
import { Button } from '~/components/button/button';
import { json } from '@remix-run/cloudflare';
import styles from './r2-worker-test.module.css';

interface ActionData {
  success?: boolean;
  errors?: {
    name?: string;
    comment?: string;
    turnstile?: string;
    delete?: string;
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
    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.cloudflare.env.AUTH_KEY_SECRET
      }
    });
    
    const comments = await response.json();
    return json<LoaderData>({ comments });
  } catch (error) {
    return json<LoaderData>({ comments: [] });
  }
};

export const action = async ({ request, context }: { request: Request; context: any }) => {
const formData = await request.formData();
  const intent = formData.get('intent');

  // Handle delete
  if (intent === 'delete') {
    const timestamp = formData.get('timestamp') as string;
    if (!timestamp) {
      return json<ActionData>({ success: false, errors: { comment: 'Missing timestamp for deletion' } });
    }

    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.cloudflare.env.AUTH_KEY_SECRET,
      },
      body: JSON.stringify({ timestamp })
    });

    if (!response.ok) throw new Error('Failed to delete comment');
    return json<ActionData>({ success: true });
  }

  try {    
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;
    const token = formData.get('cf-turnstile-response') as string;

    const verificationResult = await verifyTurnstileToken(token);
    if ('success' in verificationResult && !verificationResult.success) {
      return json<ActionData>({ 
        success: false, 
        errors: { turnstile: 'Please complete the CAPTCHA' } 
      });
    }

    if (!name || !comment) {
      return json<ActionData>({
        success: false,
        errors: {
          name: !name ? 'Name is required' : undefined,
          comment: !comment ? 'Comment is required' : undefined,
        },
      });
    }

    const response = await fetch('https://r2-worker.stephenjlu.com/comments.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Auth-Key': context.cloudflare.env.AUTH_KEY_SECRET,
      },
      body: JSON.stringify({ name, comment, timestamp: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error('Failed to save comment');
    return json<ActionData>({ success: true });
  } catch {
    return json<ActionData>({ success: false, errors: { comment: 'Failed to save comment' } });
  }
};

export default function R2WorkerTest() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<ActionData>();
  const navigate = useNavigate();  

  useEffect(() => {
    if (actionData?.success) navigate('.', { replace: true });
  }, [actionData?.success, navigate]);

  return (
    <div data-theme="dark" className={styles.container}>
      <h1>R2 Comments Test</h1>
      <Form method="post" className={styles.form}>
  <label className={styles.label}>
    Name
    <input
      required
      name="name"
      type="text"
      maxLength={255}
      className={`${styles.input} ${actionData?.errors?.name ? styles.error : ''}`}
    />
  </label>
  
  <label className={styles.label}>
    Comment
    <textarea
      required
      name="comment"
      maxLength={255}
      className={`${styles.textarea} ${actionData?.errors?.comment ? styles.error : ''}`}
    />
  </label>
        <Turnstile
          theme="dark"
          className={styles.turnstile}
          success={actionData?.success}
        />
        <Button icon="send" type="submit">
          Submit Comment
        </Button>
      </Form>

      {actionData?.success && (
        <div className={styles.success}>✓ Comment submitted successfully</div>
      )}
      {actionData?.errors && (
        <div className={styles.error}>
          ✗ {Object.values(actionData.errors).filter(Boolean).join(', ')}
        </div>
      )}

      <div className={styles.comments}>
  <h2>Comments ({loaderData.comments.length})</h2>
  <br />
  {loaderData.comments.length === 0 ? (
    <div>No comments yet!</div>
  ) : (
    loaderData.comments.map((comment, index) => (
      <div key={index} className={styles.comment}>
        <div className={styles.commentHeader}>
          <strong>{comment.name}</strong>
          <Form method="post">
            <input type="hidden" name="timestamp" value={comment.timestamp} />
            <input type="hidden" name="intent" value="delete" />
            <button
              type="submit"
              className={styles.deleteButton}
              onClick={(e) => {
                if (!confirm('Are you sure you want to delete this comment?')) {
                  e.preventDefault();
                }
              }}
            >
              Delete
            </button>
          </Form>
        </div>
        <p>{comment.comment}</p>
        <small>{new Date(comment.timestamp).toLocaleString()}</small>
      </div>
    ))
  )}
</div>
    </div>
  );
}