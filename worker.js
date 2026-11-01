export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    // 1. AI API via Cloudflare Workers AI native binding
    if (url.pathname === "/api/ai" && request.method === "POST") {
      try {
        const body = await request.json();
        const model = body.model || "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

        const aiResult = await env.AI.run(model, {
          messages: body.messages,
          max_tokens: body.max_tokens || 400,
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

    // 2. Open Food Facts Barcode Proxy
    if (url.pathname.startsWith("/api/barcode/") && request.method === "GET") {
      try {
        const barcode = url.pathname.split("/").pop();
        const offRes = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`, {
          headers: {
            "User-Agent": "CalorAI-Worker/2.0 (contact@nalarasa.workers.dev)"
          }
        });
        const offData = await offRes.json();
        return new Response(JSON.stringify(offData), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    // 3. Open Food Facts Food Search Proxy
    if (url.pathname === "/api/search-food" && request.method === "GET") {
      try {
        const query = url.searchParams.get("q") || "";
        const targetUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20`;
        const offRes = await fetch(targetUrl, {
          headers: {
            "User-Agent": "CalorAI-Worker/2.0 (contact@nalarasa.workers.dev)"
          }
        });
        const offData = await offRes.json();
        return new Response(JSON.stringify(offData), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    // 4. wger Exercises API Proxy
    if (url.pathname === "/api/exercises" && request.method === "GET") {
      try {
        const category = url.searchParams.get("category");
        let target = `https://wger.de/api/v2/exerciseinfo/?limit=50&language=2`;
        if (category) target += `&category=${category}`;
        const wgerRes = await fetch(target, {
          headers: { "Accept": "application/json" }
        });
        const data = await wgerRes.json();
        return new Response(JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    // Serve static frontend files (index.html, manifest.json, sw.js, etc.)
    return env.ASSETS.fetch(request);
  }
};
