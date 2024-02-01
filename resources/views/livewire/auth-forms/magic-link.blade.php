<div>
    <div>
        <img class="w-auto h-10" src="{{ url('svg/logo.svg') }}" alt="{{ config('app.name') }}">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in with magic link!</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
            We will send you a one-time sign in link to your email.
        </p>
    </div>
    <div class="mt-5">
        <x-form wire:submit='sendMagicLink'>
            <x-form-input type="email" wire:model="form.email" placeholder="e.g. you@example.com" icon-left="feather/mail" required autofocus />
            <div class="flex items-center justify-between gap-3">
                <x-form-button type="submit" theme="black" wire:loading.attr="disabled" class="text-center">Send Sign In Link</x-form-button>
                <x-link wire:click="toggleFormType('default')" class="font-bold underline">Cancel</x-link>
            </div>
        </x-form>
    </div>
</div>
