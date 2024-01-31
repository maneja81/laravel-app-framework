@props([
    'name' => $attributes->wire('model')->value ?? '',
    'label' => '',
    'labelClass' => '',
    'rounded' => true,
    'info' => '',
    'iconLeft' => '',
    'iconRight' => '',
    'hideErrors' => false,
])
@php
    $input_class[] = 'input peer';
    $prefix_class[] = 'input-prefix';
    $suffix_class[] = 'input-suffix';
    if ($rounded) {
        $input_class[] = 'rounded-lg';
        $prefix_class[] = 'rounded-l-lg';
        $suffix_class[] = 'rounded-r-lg';
    }
    if ($prefix ?? false) {
        $input_class[] = 'rounded-l-none';
    }
    if ($suffix ?? false) {
        $input_class[] = 'rounded-r-none';
    }
    if ($iconLeft ?? false) {
        $input_class[] = 'pl-10';
    }
    if ($iconRight ?? false) {
        $input_class[] = 'pr-10';
    }
    $input_class = implode(' ', $input_class);
    $prefix_class = implode(' ', $prefix_class);
    $suffix_class = implode(' ', $suffix_class);
@endphp
<label class="block w-full">
    @if ($label != '')
        <div class="mb-1 ml-1 font-bold">
            <span class="{{ $labelClass }}">{{ $label }}</span>
            @if ($attributes->get('required', false))
                <span class="text-red-500">*</span>
            @endif
        </div>
    @endif
    <div class="flex items-center justify-start w-full group">
        @if ($prefix ?? false)
            <div class="{{ $prefix_class }}">
                <span class="opacity-60">{{ $prefix }}</span>
            </div>
        @endif
        <div class="relative w-full">
            <input name="{{ $name }}" {{ $attributes->merge(['class' => $input_class]) }} />
            @if ($iconRight ?? false)
                <div class="absolute opacity-40 bottom-2.5 right-4 peer-focus:opacity-100">
                    <x-svg src="{{ $iconRight }}" class="w-4" />
                </div>
            @endif
            @if ($iconLeft ?? false)
                <div class="absolute opacity-40 bottom-2.5 left-4 peer-focus:opacity-100">
                    <x-svg src="{{ $iconLeft }}" class="w-4" />
                </div>
            @endif
        </div>
        @if ($suffix ?? false)
            <div class="{{ $suffix_class }}">
                <span class="opacity-60">{{ $suffix }}</span>
            </div>
        @endif
    </div>
    @if (!$hideErrors)
        @error($name)
            <div class="mt-1 ml-1 text-sm text-red-500">{{ $message }}</div>
        @enderror
    @endif
    @if ($info ?? false)
        <div class="mt-1 ml-1 text-sm text-slate-400 dark:text-navy-300">{!! $info !!}</div>
    @endif
</label>
