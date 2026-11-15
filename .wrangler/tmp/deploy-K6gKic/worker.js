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
    if (url.pathname === "/api/auth/me" && request.method === "GET") {
      const authHeader = request.headers.get("Authorization");
      if (!authHeader) {
        return new Response(JSON.stringify({ error: "Missing Authorization header" }), {
          status: 401,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
      try {
        const supaRes = await fetch(`${env.SUPABASE_URL || "https://yxydabqmsjijgnrymkle.supabase.co"}/auth/v1/user`, {
          headers: {
            "apikey": env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_jXjCgAT5zqBtbr3pA3qNOQ_YBpo4gh6",
            "Authorization": authHeader
          }
        });
        const userData = await supaRes.json();
        return new Response(JSON.stringify(userData), {
          status: supaRes.status,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }
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
            model,
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
