@props([
    'name' => $attributes->wire('model')->value ?? '',
    'text' => 'Button Text',
    'style' => 'background-color: #e2e8f0; height: 1px; line-height: 1px; margin: 20px 0',
])
<div role="separator" {{ $attributes->merge(['style' => $style]) }}>&zwj;</div>
