<div>
    <div>
        <img class="w-auto h-10" src="{{ url('svg/logo.svg') }}" alt="{{ config('app.name') }}">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset your password!</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
            Choose a strong and easy to remember password to keep your account secure.
        </p>
    </div>
    <div class="mt-5">
        <x-form wire:submit='setNewPassword'>
            <x-form-input type="email" wire:model="form.email" placeholder="e.g. you@example.com" icon-left="feather/mail" required disabled />
            <x-form-input type="password" wire:model="form.password" placeholder="New password" icon-left="feather/key" required autofocus />
            <x-form-input type="password" wire:model="form.password_confirmation" placeholder="Type new password again" icon-left="feather/key" required />
            <div class="flex items-center justify-start gap-3">
                <x-form-button type="submit" theme="black" wire:loading.attr="disabled" class="block text-center">Continue</x-form-button>
                <x-link wire:click="toggleFormType('default')" class="font-bold underline">Cancel</x-link>
            </div>
        </x-form>
    </div>
</div>
