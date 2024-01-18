<div>
    @script
        <script>
            window.addEventListener('load', function() {
                window.$fb.dbWatch('{{ $path }}', function(data) {
                    $wire.dispatch('firebase-response', {
                        data: data
                    })
                })
            });
        </script>
    @endscript
</div>
