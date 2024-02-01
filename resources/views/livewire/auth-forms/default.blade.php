<div>
    <div>
        <img class="w-auto h-10" src="{{ url('svg/logo.svg') }}" alt="{{ config('app.name') }}">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account!</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
            New User? <x-link wire:click="toggleFormType('register')">Create your account</x-link>
        </p>
    </div>
    <div class="mt-5">
        <x-form wire:submit='login'>
            <x-form-input type="email" wire:model="form.email" placeholder="e.g. you@example.com" icon-left="feather/mail" required autofocus />
            <x-form-input type="password" wire:model="form.password" placeholder="Your password" icon-left="feather/key" required />
            <div class="flex items-center justify-between gap-3">
                <x-form-button type="submit" theme="black" wire:loading.attr="disabled" class="text-center">Sign In</x-form-button>
                <x-link wire:click="toggleFormType('forgot-password')" class="font-bold underline">Forgot password?</x-link>
            </div>
        </x-form>
    </div>
</div>
