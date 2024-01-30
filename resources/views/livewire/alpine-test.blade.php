<div x-data="{
    init() {

        },
        getTitle() {
            let promptTitle = prompt('Please enter your name', 'This is a title from prompt.');
            if (promptTitle != null) {
                $wire.title = promptTitle;
                $wire.save();
            }
        }
}">
    <div>This is alpine test</div>
    <div class="p-3 my-3 border bg-slate-200">
        {!! $result !!}
    </div>
    <div>
        <input type="text" wire:model.live.debounce.300ms="content" x-on:blur="$wire.save()" class="w-full p-3 border rounded">
        <small>
            Character count: <span x-text="$wire.content.length"></span>
        </small>
    </div>
    <div>
        <input wire:model.live.debounce.300ms="title" x-on:blur="$wire.save()" type="text" class="w-full p-3 border rounded">
        <div class="my-3">
            <button type="button" x-on:click="$wire.title = ''" class="px-4 py-2 text-white rounded bg-primary-900">Clear</button>
        </div>
    </div>
    <button type="button" x-on:click="getTitle()" class="px-4 py-2 text-white rounded bg-primary-900">Prompt</button>
</div>
