<?php

namespace App\Support\Helpers\Traits;

use Illuminate\Support\Str;

trait ApiHelpers
{

    public function apiCall($method, $url, $data = [], $headers = [])
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request(Str::upper($method), $url, [
            'headers' => $headers,
            'data' => $data
        ]);
        return json_decode($response->getBody()->getContents());
    }
}
