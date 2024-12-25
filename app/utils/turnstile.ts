interface ActionData {
  success?: boolean;
  errors?: { message: string };
  status?: number;
  'error-codes'?: string[];
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

    return await verificationResponse.json();
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      errors: { message: 'Failed to verify token' },
      status: 500
    };
  }
}