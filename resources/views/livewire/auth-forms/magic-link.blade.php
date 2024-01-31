<x-form wire:submit='sendEmailLink'>
    <x-form-input wire:model="form.email" label="Enter your email address" placeholder="e.g. you@example.com" icon-left="feather/mail" required>
        <x-slot name="info">We will send you a magic link to login to your account.</x-slot>
    </x-form-input>
    <x-form-button type="submit" icon-right="feather/arrow-right">Send login link</x-form-button>
</x-form>
