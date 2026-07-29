export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const token = "cfut_poJJE4MaOsy9QDZ0L9Wdqu6USUjXxZ3bZAJh18yb25097ed9";
    const endpoint = "https://gateway.ai.cloudflare.com/v1/85d0643928caa6b9c94dd6ce19700dce/calorai-gateway/workers-ai/v1/chat/completions";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
      },
      body: JSON.stringify(body)
    });

    const responseData = await res.arrayBuffer();
    return new Response(responseData, {
      status: res.status,
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

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}
