const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Custom-Auth-Key',
  'Content-Type': 'application/json'
};

const createResponse = (data, status = 200) => new Response(
  JSON.stringify(data), 
  { status, headers: corsHeaders }
);

const hasValidHeader = (request, env) => 
  request.headers.get("X-Custom-Auth-Key") === env.AUTH_KEY_SECRET;

export default {
  async fetch(request, env) {       
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    if (!hasValidHeader(request, env)) {
      return createResponse({ error: 'Forbidden' }, 403);
    }

    try {
      const bucket = env.R2_BUCKET;
      
      switch (request.method) {
        case "GET": {
          const file = await bucket.get('comments.json');
          const comments = file ? JSON.parse(await file.text()) : [];
          return createResponse(comments);
        }

        case "PUT": {
          const file = await bucket.get('comments.json');
          const comments = file ? JSON.parse(await file.text()) : [];
          const newComment = await request.json();
          
          comments.push(newComment);
          await bucket.put('comments.json', JSON.stringify(comments));
          
          return createResponse({ success: true });
        }

        default:
          return createResponse({ error: 'Method not allowed' }, 405);
      }
    } catch (error) {
      console.error('Worker error:', error);
      return createResponse({ error: error.message }, 500);
    }
  }
};