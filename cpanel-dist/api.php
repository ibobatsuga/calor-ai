<?php
// Proxy to Sakelar GPT Luna 6.0 backend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $body = json_decode($input, true);
    if (!is_array($body)) {
        $body = [];
    }
    if (!isset($body['model'])) {
        $body['model'] = 'gpt-6-luna';
    }

    $ch = curl_init('https://api.sakelar.web.id/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer sk_live_kWr-688piLS3Bv1UbEwBfVdsmyuaCGqEKF4n64V23E8',
        'User-Agent: CalorAI-cPanel-Proxy/1.0'
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 45);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);

    if ($err) {
        http_response_code(502);
        header('Content-Type: application/json');
        echo json_encode(["error" => "Backend connection failed", "details" => $err]);
        exit;
    }

    http_response_code($httpCode ?: 200);
    header('Content-Type: application/json');
    echo $response;
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Endpoint not found"]);
