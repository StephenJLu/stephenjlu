import { useState } from 'react';
import { Turnstile } from '~/components/turnstile/turnstile';
import { verifyTurnstileToken } from '~/utils/turnstile';
import { Form } from '@remix-run/react';
import { Button } from '~/components/button/button';

export const TurnstileTest = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const formData = new FormData(event.currentTarget);
    const token = formData.get('cf-turnstile-response') as string;
    
    try {
      const result = await verifyTurnstileToken(token);
      if ('success' in result && result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        if ('message' in result) {
          setErrorMessage(result.message || 'Verification failed');
        } else {
          setErrorMessage('Verification failed');
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Verification failed');
    }
  };

  return (
    <div 
    data-theme="dark"
    style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '6rem'
    }}>
      <h1>Turnstile Test</h1>
      <h3>Try verifying again after removal of the widget</h3>
      <Form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <Turnstile
          theme="dark"
          style={{ marginBottom: '1rem' }}
          success={status === 'success'}
        />
        <Button                      
              icon="check"
              type="submit"              
            >
              Verify Turnstile
            </Button>        
      </Form>
      {status === 'success' && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          ✓ Verification successful
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginTop: '1rem', color: 'red' }}>
          ✗ {errorMessage}
        </div>
      )}
      {status === 'loading' && (
        <div style={{ marginTop: '1rem', color: '#FFDE21' }}>
          Verifying...
        </div>
      )}
    </div>
  );
}