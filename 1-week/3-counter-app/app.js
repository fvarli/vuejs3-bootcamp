const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        /*getCounterResult(){
            return this.counter > 5 ? 'Greater' : 'Smaller'
        },*/
    },

    computed: {
        getCounterResult() {
            console.log('Counter 1 worked');
            return this.counter > 5 ? 'Greater' : 'Smaller';
        },
        getCounter2Result() {
            console.log('Counter 2 worked');
            return this.counter2 > 5 ? 'Greater' : 'Smaller';
        }
    },

    watch: {
        counter(newValue, oldValue) {
            console.log('Old Value: ', oldValue, "=>", 'New Value: ', newValue );
        },
        getCounterResult(newValue, oldValue) {
            console.log('Old Value: ', oldValue, "=>", 'New Value: ', newValue );
        }
    }


    /*methods: {
        inc(){
            this.counter++;
        },
        dec(){
            this.counter--;
        },
    }*/
}).mount('#app');
