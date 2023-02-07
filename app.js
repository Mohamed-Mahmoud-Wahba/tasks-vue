const app = Vue.createApp({
    data() {
        return {
            counter:  0,
            name: '',
        }
    },  
    watch: {
     counter(counter){
        if (counter === 40){
             alert('hi')
          }
     }
    
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;

        },
        Reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event) {
            this.name = event.target.value; 
        },
        reset() {
            this.name = '';
        },

    },
});

app.mount('#events');