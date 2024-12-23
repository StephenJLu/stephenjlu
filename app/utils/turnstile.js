const SECRET_KEY = 'ENTER_SECRET_KEY_HERE';

addEventListener('fetch', (event) => {
  event.respondWith(handlePost(event.request));
});

/**
 * @param {Request<unknown, CfProperties<unknown>>} request
 */
async function handlePost(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const token = body['cf-turnstile-response'];
    const ip = request.headers.get('CF-Connecting-IP') || '';

    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Token missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verificationResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    });

    const outcome = await verificationResponse.json();

    if (outcome.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false, errors: outcome['error-codes'] }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}