<?php

namespace App\Support\Helpers\Traits;

use Illuminate\Support\Str;


trait UiHelpers
{

    public function isMenuActive(array $items, string $active_class = "bg-primary dark:bg-accent text-white", string $inactive_class = "")
    {
        $count = collect(request()->segments())->intersect($items)->count();

        return $count == count($items) ? $active_class : $inactive_class;
    }

    public function currentRouteHas($string, string $active_class = '', string $inactive_class = '')
    {
        $string = str_replace('.', '/', $string);
        if ($active_class != '' || $inactive_class != '') {
            return request()->is($string) ? $active_class : $inactive_class;
        }

        return request()->is($string);
    }

    public function currentRouteIs($string, string $active_class = '', string $inactive_class = '')
    {
        if (request()->route()->getName($string) == $string) {
            return $active_class;
        }

        return $inactive_class;
    }

    public function svg(string $path, string $class = 'w-5 h-5')
    {
        $path = "svg/{$path}";
        $icon_class_name = 'svg-' . basename($path) . '-' . rand(1111, 9999) . ' ' . $class;
        $path = (!Str::contains($path, '.svg')) ? $path . '.svg' : $path;
        $path = public_path($path);
        if (!file_exists($path)) {
            return '';
        }
        $svg_content = $this->filesystem->get($path);
        $svg_content = Str::replace('<svg', '<svg class="' . $icon_class_name . '"', $svg_content);
        return $svg_content;
    }

}
