// Check requests for a pre-shared secret
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

        // Handle OPTIONS preflight
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

        const url = new URL(request.url);
        const key = url.pathname.slice(1);

        try {
            switch (request.method) {
                case "PUT": {
                    // Get existing comments or initialize empty array
                    let comments = [];
                    const existingComments = await env.R2_BUCKET.get('comments.json');
                    
                    if (existingComments) {
                        const existingData = await existingComments.json();
                        comments = existingData || [];
                    }

                    // Add new comment
                    const newComment = await request.json();
                    comments.push(newComment);

                    // Save updated comments
                    await env.R2_BUCKET.put('comments.json', JSON.stringify(comments));

                    return new Response(JSON.stringify({ success: true }), {
                        headers: corsHeaders
                    });
                }

                case "GET":
                    if (key.endsWith('/')) {
                        // List objects with prefix
                        const prefix = key;
                        const objects = [];
                        let cursor;
                        
                        do {
                            const listing = await env.R2_STORAGE.list({
                                prefix: prefix,
                                cursor: cursor,
                                limit: 1000
                            });
                            
                            objects.push(...listing.objects.map(obj => ({
                                name: obj.key,
                                size: obj.size,
                                uploaded: obj.uploaded.toISOString()
                            })));
                            
                            cursor = listing.cursor;
                        } while (cursor);

                        return new Response(JSON.stringify(objects), {
                            headers: {
                                ...corsHeaders,
                                'Content-Type': 'application/json'
                            }
                        });
                    } else {
                        const object = await env.R2_STORAGE.get(key);
                        if (object === null) {
                            return new Response("Object Not Found", { 
                                status: 404,
                                headers: corsHeaders 
                            });
                        }
                        const headers = new Headers(corsHeaders);
                        object.writeHttpMetadata(headers);
                        headers.set("etag", object.httpEtag);
                        return new Response(object.body, { headers });
                    }               
                default:
                    return new Response("Method Not Allowed", {
                        status: 405,
                        headers: {
                            ...corsHeaders,
                            Allow: "PUT, GET"
                        }
                    });
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