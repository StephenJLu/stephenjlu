const hasValidHeader = (request, env) => {    
    return (request.headers.get("X-Custom-Auth-Key") === env.AUTH_KEY_SECRET);
};

export default {
    async fetch(request, env) {       
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Custom-Auth-Key',
            'Content-Type': 'application/json'
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: corsHeaders
            });
        }
        
        if (!hasValidHeader(request, env)) {
            return new Response("Forbidden", { 
                status: 403,
                headers: corsHeaders 
            });
        }

        try {
            switch (request.method) {
                case "PUT": {
                    let comments = [];
                    const existingComments = await env.R2_BUCKET.get('comments.json');
                    
                    if (existingComments) {
                        try {
                            const existingText = await existingComments.text();
                            if (existingText) {
                                comments = JSON.parse(existingText);
                            }
                        } catch (e) {
                            console.error('Failed to parse existing comments:', e);
                            comments = [];
                        }
                    }

                    const newComment = await request.json();
                    comments.push(newComment);

                    await env.R2_BUCKET.put('comments.json', JSON.stringify(comments));

                    return new Response(JSON.stringify({ 
                        success: true,
                        message: 'Comment saved'
                    }), {
                        headers: corsHeaders
                    });
                }
            }
        } catch (error) {
            console.error('Worker error:', error);
            return new Response(JSON.stringify({ 
                success: false, 
                error: error.message 
            }), {
                status: 500,
                headers: corsHeaders
            });
        }
    }
};