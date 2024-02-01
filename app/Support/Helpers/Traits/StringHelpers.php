<?php

namespace App\Support\Helpers\Traits;

use DateTime;
use Illuminate\Support\Str;

trait StringHelpers
{
    public function strUnique($prefix = null, $case = 'upper'): string
    {
        $str1 = base_convert(mt_rand(0, pow(36, 4) - 1), 10, 36);
        $str2 = base_convert(mt_rand(0, pow(36, 3) - 1), 10, 36);
        $str3 = substr(sha1(md5(strtotime(date('Y-m-d H:i:s')))), 7, 3);
        $unique_string = sprintf('%04s%03s%s', $str1, $str2, $str3);
        $unique_string = ($case == 'upper') ? strtoupper($unique_string) : $unique_string;
        $unique_string = ($case == 'lower') ? strtolower($unique_string) : $unique_string;

        return $prefix.$unique_string;
    }

    public function strTimeInAgo($datetime, $full = false): string
    {
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);

        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;

        $string = [
            'y' => 'year',
            'm' => 'month',
            'w' => 'week',
            'd' => 'day',
            'h' => 'hour',
            'i' => 'minute',
            's' => 'second',
        ];
        foreach ($string as $k => &$v) {
            if ($diff->$k) {
                $v = $diff->$k.' '.$v.($diff->$k > 1 ? 's' : '');
            } else {
                unset($string[$k]);
            }
        }

        if (! $full) {
            $string = array_slice($string, 0, 1);
        }

        return $string ? implode(', ', $string).' ago' : 'just now';
    }

    public function strSecure($string, $action = 'e'): string
    {
        $secret_key = md5(env('APP_URL'));
        $secret_iv = sha1(md5(env('APP_URL')));

        $output = false;
        $encrypt_method = 'AES-256-CBC';
        $key = hash('sha256', $secret_key);
        $iv = substr(hash('sha256', $secret_iv), 0, 16);

        if ($action == 'e') {
            $output = base64_encode(openssl_encrypt($string, $encrypt_method, $key, 0, $iv));
        } elseif ($action == 'd') {
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        }

        return $output;
    }

    public function strQueryString(string $url, array $query_params = []): string
    {
        $operator = '';
        if (! empty($query_params)) {
            $operator = Str::contains($url, '?') ? '&' : '?';
        }

        $url .= $operator.http_build_query($query_params);

        return $url;
    }

    public function strCamelToSlug($string, $separator = '-'): string
    {
        return strtolower(preg_replace(
            '/(?<=\d)(?=[A-Za-z])|(?<=[A-Za-z])(?=\d)|(?<=[a-z])(?=[A-Z])/',
            $separator,
            $string
        ));
    }

    public function strToSlug($text, $divider = '-'): string
    {
        $text = preg_replace('~[^\pL\d]+~u', $divider, $text);
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        $text = preg_replace('~[^-\w]+~', '', $text);
        $text = trim($text, $divider);
        $text = preg_replace('~-+~', $divider, $text);
        $text = strtolower($text);
        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }

    public function strToCamelCase($string): string
    {
        $string = str_replace(['_', ' '], '-', $string);
        $string = strtolower(preg_replace(
            '/(?<=\d)(?=[A-Za-z])|(?<=[A-Za-z])(?=\d)|(?<=[a-z])(?=[A-Z])/',
            '-',
            $string
        ));
        $string = ucwords(str_replace('-', ' ', $string));

        return lcfirst(str_replace(' ', '', $string));
    }

    public function strUuid(): string
    {
        return Str::uuid();
    }

    public function strPlural($string, $count = 2): string
    {
        return Str::plural($string, $count);
    }

    public function strExtractLinks(string $html): array
    {
        $links_array = [];
        if (preg_match_all('/<a\s+.*?href=[\"\']?([^\"\' >]*)[\"\']?[^>]*>(.*?)<\/a>/i', $html, $matches, PREG_SET_ORDER)) {
            foreach ($matches as $match) {
                array_push($links_array, [$match[1], $match[2]]);
            }
        }

        return $links_array;
    }
}
