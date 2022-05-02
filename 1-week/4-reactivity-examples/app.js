const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemList: ["PHP", "CodeIgniter", "Laravel"],
        };
    },
    methods: {
        searchList() {
            /*const filteredList = this.itemList.filter((i) => i.includes(this.search));
            console.log("filteredList :>>", filteredList);*/
        }
    },
    computed: {
        filteredList() {
            return this.itemList.filter((i) => i.includes(this.search));
        },
    },
});

app.mount('#app');
