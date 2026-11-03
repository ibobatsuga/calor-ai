// worker.js
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }
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
                content
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
    const staticRes = await env.ASSETS.fetch(request);
    if (url.pathname === "/" || url.pathname.endsWith(".html") || url.pathname.endsWith("sw.js")) {
      const freshHeaders = new Headers(staticRes.headers);
      freshHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");
      freshHeaders.set("Pragma", "no-cache");
      freshHeaders.set("Expires", "0");
      return new Response(staticRes.body, {
        status: staticRes.status,
        statusText: staticRes.statusText,
        headers: freshHeaders
      });
    }
    return staticRes;
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
