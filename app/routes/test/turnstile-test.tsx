import { useState } from 'react';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { Form } from '@remix-run/react';

export const TurnstileTest = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const token = formData.get('cf-turnstile-response') as string;
    
    try {
      const result = await verifyTurnstileToken(token);
      if (!result.errors) {
        setSuccess(true);
        alert('Turnstile verification successful!');
      } else {
        alert('Verification failed: ' + result.errors.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Verification failed');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1>Turnstile Test</h1>
      <Form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <Turnstile
          theme="dark"
          style={{ marginBottom: '1rem' }}
        />
        <button 
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Verify Turnstile
        </button>
      </Form>
      {success && (
        <div style={{ 
          marginTop: '1rem',
          color: 'green' 
        }}>
          ✓ Verification successful
        </div>
      )}
    </div>
  );
}