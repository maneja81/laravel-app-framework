@props([
    'name' => $attributes->wire('model')->value ?? '',
    'style' => 'display: inline-block; border-radius: 4px; background-color: #000000; padding: 16px 24px; font-size: 16px; font-weight: 600; line-height: 1; color: #fff; text-decoration: none',
])
<a {{ $attributes->merge(['style' => $style]) }}>
    <!--[if mso]>
<i style="mso-font-width: 150%; mso-text-raise: 30px" hidden>&emsp;</i>
<![endif]-->
    <span style="mso-text-raise: 16px">{{ $slot }}</span>
    <!--[if mso]>
<i hidden style="mso-font-width: 150%;">&emsp;&#8203;</i>
<![endif]-->
</a>
