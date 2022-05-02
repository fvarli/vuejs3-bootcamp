const app = Vue.createApp({
    data() {
        return {
            todoList: [
                {id: 1, title:"Vue Bootcamp Week 1", completed: false},
                {id: 2, title:"Vue Bootcamp Week 2", completed: false},
                {id: 3, title:"Vue Bootcamp Week 3", completed: false},
                {id: 4, title:"Vue Bootcamp Week 4", completed: false},
                {id: 5, title:"Vue Bootcamp Week 5", completed: false},
                {id: 6, title:"Vue Bootcamp Week 6", completed: false},
                {id: 7, title:"Vue Bootcamp Week 7", completed: false},
                {id: 8, title:"Vue Bootcamp Week 8", completed: false},
            ],
        }
    },
    methods: {
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                title: event.target.value,
                completed: false
            });
            event.target.value='';
        },
        removeItem(todoIdem) {
            // console.log(todoIdem);
            this.todoList = this.todoList.filter((todo) => todo != todoIdem);
        }
    },

    computed: {
        completedItemCount(){
            return this.todoList.filter(t => t.completed).length
        },
        unCompletedItemCount(){
            return this.todoList.filter(t => !t.completed).length
        }
    }
});

app.mount("#app");
