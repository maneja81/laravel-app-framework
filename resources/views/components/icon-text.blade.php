@props([
    'src' => 'feather/activity',
    'class' => 'w-5',
])
<span class="inline-flex items-center justify-start space-x-2">
    <x-svg src="{{ $src }}" class="{{ $class }}" />
    <span>{{ $slot }}</span>
</span>
