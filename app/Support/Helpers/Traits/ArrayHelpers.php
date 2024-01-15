<?php

namespace App\Support\Helpers\Traits;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

trait ArrayHelpers
{

    public function arrayFilterFields($array, $fields = [])
    {
        if (isset($array['data']) && is_array($array['data'])) {
            $array = $array['data'];
        }
        if (!empty($fields)) {
            $return = array_intersect_key($array, array_flip((array) $fields));
            foreach ($fields as $field) {
                if (Str::contains($field, '.')) {
                    Arr::set($return, $field, Arr::get($array, $field));
                }
            }
        } else {
            $return = array_intersect_key($array, array_flip((array) array_keys($array)));
        }

        return $return;
    }

    public function objectToArray($object)
    {
        return collect($object)->toArray();
    }

    public function arrayToKeyValue(array $array, bool $remove_blank)
    {
        $return = [];
        foreach ($array as $key => $value) {
            if ($key != '') {
                $return[] = [
                    'key'   => $key,
                    'value' => $value,
                ];
            }
        }

        return $return;
    }

    public function weekdaysArray($return_type = false)
    {
        $data = [
            'monday'    => 'Monday',
            'tuesday'   => 'Tuesday',
            'wednesday' => 'Wednesday',
            'thursday'  => 'Thursday',
            'friday'    => 'Friday',
            'saturday'  => 'Saturday',
            'sunday'    => 'Sunday',
        ];
        if (!$return_type) {
            return $data;
        }
        if ($return_type && 'keys' === $return_type) {
            return array_keys($data);
        }
        if ($return_type && 'values' === $return_type) {
            return array_values($data);
        }
    }
}
