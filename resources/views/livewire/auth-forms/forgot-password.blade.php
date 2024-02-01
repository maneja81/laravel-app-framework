<div>
    <div>
        <img class="w-auto h-10" src="{{ url('svg/logo.svg') }}" alt="{{ config('app.name') }}">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot your password!</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
            We will send you an email with the verification link to reset your password.
        </p>
    </div>
    <div class="mt-5">
        <x-form wire:submit='sendPasswordResetEmail'>
            <x-form-input type="email" wire:model="form.email" placeholder="e.g. you@example.com" icon-left="feather/mail" required />
            <div class="flex items-center justify-between gap-3">
                <x-form-button type="submit" theme="black" wire:loading.attr="disabled" class="block text-center">Continue</x-form-button>
                <x-link wire:click="toggleFormType('default')" class="font-bold underline">Cancel</x-link>
            </div>
        </x-form>
    </div>
</div>
