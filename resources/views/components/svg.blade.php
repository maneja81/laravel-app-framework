@props([
    'src' => 'feather/activity',
    'class' => 'w-5',
])
<span {{ $attributes->merge(['class' => 'inline-flex']) }}>{!! helpers()->svg($src, $class) !!}</span>
