export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    // Handle AI requests via Cloudflare Workers AI native binding (No API Key needed!)
    if (url.pathname === "/api/ai" && request.method === "POST") {
      try {
        const body = await request.json();
        const model = body.model || "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

        const aiResult = await env.AI.run(model, {
          messages: body.messages,
          max_tokens: body.max_tokens || 300,
          temperature: body.temperature || 0.1
        });

        const content = aiResult.response || aiResult;

        return new Response(JSON.stringify({
          choices: [
            {
              message: {
                content: content
              }
            }
          ]
        }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      }
    }

    // Serve static frontend files (index.html)
    return env.ASSETS.fetch(request);
  }
};
