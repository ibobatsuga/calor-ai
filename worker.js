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

    // 1. AI API via Sakelar GPT Luna 6.0
    if (url.pathname === "/api/ai" && request.method === "POST") {
      try {
        const body = await request.json();
        const model = body.model || "gpt-6-luna";

        const sakelarRes = await fetch("https://api.sakelar.web.id/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk_live_kWr-688piLS3Bv1UbEwBfVdsmyuaCGqEKF4n64V23E8"
          },
          body: JSON.stringify({
            model: model,
            messages: body.messages,
            temperature: body.temperature || 0.2
          })
        });

        if (sakelarRes.ok) {
          const sakelarData = await sakelarRes.json();
          return new Response(JSON.stringify(sakelarData), {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          });
        }

        const errText = await sakelarRes.text();
        throw new Error(`Sakelar API failed (${sakelarRes.status}): ${errText}`);
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
    const staticRes = await env.ASSETS.fetch(request);
    
    // Disable caching for HTML and service worker to guarantee immediate updates
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
