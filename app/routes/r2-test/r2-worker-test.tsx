import { useEffect, useRef } from 'react';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { Form, useActionData, useLoaderData, useNavigate } from '@remix-run/react';
import { Button } from '~/components/button/button';
import { Input } from '~/components/input/input';
import { json } from '@remix-run/cloudflare';
import { Icon } from '~/components/icon/icon';
import { Transition } from '~/components/transition/transition';
import { tokens } from '~/components/theme-provider/theme';
import { cssProps, msToNum } from '~/utils/style';
import styles from './r2-worker-test.module.css';

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
  try {
    const formData = await request.formData();
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
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (actionData?.success) navigate('.', { replace: true });
  }, [actionData?.success, navigate]);

  return (
    <div data-theme="dark" className={styles.container}>
      <h1>R2 Comments Test</h1>
      <Form method="post" className={styles.form}>
        <Input
          required
          label="Name"
          name="name"
          error={actionData?.errors?.name}
          maxLength={255}
          type="text" id={undefined} value={undefined} multiline={undefined} className={undefined} style={undefined} onBlur={undefined} autoComplete={undefined} onChange={undefined}        />
        <Input
          required
          label="Comment"
          name="comment"
          multiline
          error={actionData?.errors?.comment}
          maxLength={255} id={undefined} value={undefined} className={undefined} style={undefined} onBlur={undefined} autoComplete={undefined} type={undefined} onChange={undefined}        />
          <br />
          <Transition
          unmount
          in={!!actionData?.errors}
          timeout={msToNum(tokens.base.durationM)}
        >
          {({ status: errorStatus, nodeRef }: { status: string; nodeRef: React.RefObject<HTMLDivElement> }) => (
            <div
              className={styles.formError}
              ref={nodeRef}
              data-status={errorStatus}
              style={cssProps({
                height: errorStatus ? errorRef.current?.offsetHeight ?? 0 : 0,
              })}
            >
              <div className={styles.formErrorContent} ref={errorRef}>
                <div className={styles.formErrorMessage}>
                  <Icon className={styles.formErrorIcon} icon="error" />
                  {actionData?.errors?.name}
                  {actionData?.errors?.comment}
                  {actionData?.errors?.turnstile}
                </div>
              </div>
            </div>
          )}
        </Transition>
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
              <strong>{comment.name}</strong>
              <p>{comment.comment}</p>
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}