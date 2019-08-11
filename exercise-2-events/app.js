new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert() {
                alert("This is an alert!");
            },
            updateValue(event) {
                this.value = event.target.value;
            }
        }
    });