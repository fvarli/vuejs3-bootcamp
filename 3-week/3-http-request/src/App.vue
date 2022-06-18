<template>
    <div class="container">
        <h3>Shopping List</h3>
        <hr>
        <div class="my-2">
            <input type="text" placeholder="Buy something..." @keydown.enter="onSave">
        </div>
        <ul v-if="itemsList.length > 0">
            <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
                <span>{{ item.title }}</span>
                <button @click="onDelete(item)" class="sm red">Delete</button>
            </li>
        </ul>
        <div v-else class="bg-blue text-white">
            There is no item for now.
        </div>
        <small class="mt-2 text-red d-flex justify-content-end align-items-center">There are {{ itemCount }} items to be bought.</small>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            itemsList: []
        }
    },
    mounted() {
        axios.get("http://localhost:3000/items").then(items_response => {
            console.log("items_response :>> ", items_response);
            this.itemsList = items_response.data || [];
            console.log("this.itemsList :>> ", this.itemsList)
        });
    },
    methods: {
        onSave(e) {
            const saveObject = {
                title: e.target.value,
                created_at: new Date(),
                completed: false
            }
            axios.post("http://localhost:3000/items", saveObject).then(
                save_response => {
                    console.log(save_response);
                    this.itemsList.push(save_response.data);
                    e.target.value = '';
                    e.target.focus();
                }
            )
        },
        onDelete(item){
            axios.delete(`http://localhost:3000/items/${item.id}`).then(
                delete_response => {
                    console.log(delete_response);
                    this.itemsList = this.itemsList.filter(i => i.id !== item.id)
                }
            )
        }

    },
    computed: {
        itemCount() {
            return this.itemsList.length || 0;
        }
    }
}
</script>
