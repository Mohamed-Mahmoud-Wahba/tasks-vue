const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!'
        }
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        saveText() {
          this.message = this.currentUserInput;
        },
    },
})

app.mount('#user-goals')