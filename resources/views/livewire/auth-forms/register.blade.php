<div>
    <div>
        <img class="w-auto h-10" src="{{ url('svg/logo.svg') }}" alt="{{ config('app.name') }}">
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account!</h2>
        <p class="mt-2 text-sm leading-6 text-gray-500">
            We didn't find an account with the email address.
            <br>
            Let's create a new account for you.
        </p>
    </div>
    <div class="mt-5">
        <x-form wire:submit='register'>
            <x-form-input type="email" wire:model="form.email" placeholder="e.g. you@example.com" icon-left="feather/mail" required />
            <div class="grid-cols-2 gap-4 space-y-4 md:space-y-0 md:grid">
                <x-form-input type="text" wire:model="form.first_name" placeholder="" required autofocus placeholder="First name" />
                <x-form-input type="text" wire:model="form.last_name" placeholder="" required placeholder="Last name" />
            </div>
            <x-form-input type="password" wire:model="form.password" placeholder="Choose a strong password" required />
            <div class="flex items-center justify-between gap-3">
                <x-form-button type="submit" theme="black" wire:loading.attr="disabled" class="block text-center">Continue</x-form-button>
                <span>
                    Have an account? <x-link wire:click="toggleFormType('default')" class="font-bold underline">Sign In</x-link>
                </span>
            </div>
        </x-form>
    </div>
</div>
