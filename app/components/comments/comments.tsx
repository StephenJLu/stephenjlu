import { Form } from '@remix-run/react';
import styles from './comments.module.css';

interface Comment {
  name: string;
  comment: string;
  timestamp: string;
}

interface CommentsProps {
  comments: Comment[];
}

export function Comments({ comments }: CommentsProps) {
  return (
    <div className={styles.comments}>
      <h2>Comments ({comments.length})</h2>
      <br />
      {comments.length === 0 ? (
        <div>No comments yet!</div>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <div className={styles.commentHeader}>
              <strong>{comment.name}</strong>
              <Form method="post" style={{ display: 'inline' }}>
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
                  ×
                </button>
              </Form>
            </div>
            <p>{comment.comment}</p>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}