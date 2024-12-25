interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
}

interface TurnstileError {
  message: string;
  status: number;
}

interface ActionData {
  errors?: { message: string };
  status?: number;
}

export async function verifyTurnstileToken(token: string): Promise<ActionData> {
  try {
    const workerUrl = 'https://turnstile.stephenjlu.com';
    const verificationResponse = await fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'cf-turnstile-response': token }),
    });

    const contentType = verificationResponse.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return {
        errors: { message: `Expected JSON response but received: ${contentType}` },
        status: 400
      };
    }

    const result = await verificationResponse.json();
    
    if ('status' in result) {
      return {
        errors: { message: result.message },
        status: result.status
      };
    }

    if (!result.success) {
      return {
        errors: { message: 'CAPTCHA verification failed. Please try again.' },
        status: 400
      };
    }

    return { status: 200 };
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return {
      errors: { message: 'An error occurred during CAPTCHA verification.' },
      status: 500
    };
  }
}