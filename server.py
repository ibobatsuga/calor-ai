import http.server
import socketserver
import urllib.request
import ssl
import json
import os

PORT = 8080
CF_TOKEN = "cfut_poJJE4MaOsy9QDZ0L9Wdqu6USUjXxZ3bZAJh18yb25097ed9"
CF_ENDPOINT = "https://gateway.ai.cloudflare.com/v1/85d0643928caa6b9c94dd6ce19700dce/calorai-gateway/workers-ai/v1/chat/completions"

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

class ProxyHandler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/ai':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)

            req = urllib.request.Request(
                CF_ENDPOINT,
                data=post_data,
                headers={
                    'Authorization': f'Bearer {CF_TOKEN}',
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                method='POST'
            )

            try:
                with urllib.request.urlopen(req, context=ssl_ctx) as response:
                    res_body = response.read()
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(res_body)
            except urllib.error.HTTPError as e:
                err_body = e.read()
                self.send_response(e.code)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(err_body)
            except Exception as e:
                self.send_response(500)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_error(404)

if __name__ == "__main__":
    os.chdir("/Users/ibobatsuga/Downloads/CalorAI")
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), ProxyHandler) as httpd:
        print(f"Server CalorAI running on http://localhost:{PORT}")
        httpd.serve_forever()
