<?php
// Proxy to Cloudflare Workers AI backend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $ch = curl_init('https://calorai.nalarasa.workers.dev/api/ai');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
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
