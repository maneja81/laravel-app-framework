<form autocomplete="off" wire:loading.class="opacity-50 pointer-events-none" {{ $attributes->merge(['class' => 'space-y-3']) }}>
    <x-session-message type="error"></x-session-message>
    <x-session-message type="success"></x-session-message>
    <x-session-message type="info"></x-session-message>
    <x-session-message type="message"></x-session-message>
    <div class="space-y-4">
        {{ $slot }}
    </div>
</form>
