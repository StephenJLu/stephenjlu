// public/js/turnstileCallback.js

/**
 * Callback function invoked by Cloudflare Turnstile upon CAPTCHA completion.
 *
 * @param {string} token - The Turnstile token to be verified on the server.
 */
function onTurnstileSubmit(token) {
  console.log('Turnstile Token:', token);
  
  // Dispatch a custom event with the token
  window.dispatchEvent(new CustomEvent('turnstile-token', { detail: token }));
}

// Make the callback function globally accessible
window.onTurnstileSubmit = onTurnstileSubmit;