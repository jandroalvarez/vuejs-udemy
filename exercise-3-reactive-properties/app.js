new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout: 2000
        },
        computed: {
            result: function() {
                return this.value >= 37 ? "Done!" : "Not there yet!";
            }
        },
        watch: {
            result: function() {
                var vm = this;
                setTimeout(() => {
                    vm.value = 0;
                }, vm.timeout);
            }
        }
    });