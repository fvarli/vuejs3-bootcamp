<template>
    <TodoList></TodoList>
    <ResultBar :itemCount="provideData.todoList.length"></ResultBar>
</template>

<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
    inject: ["provideData"],
    props: {
        todoList: {
            type: Array,
            required: true
        }
    },
    emits: ["delete-todo-item"],
    components: {
        TodoList,
        ResultBar
    },
}

</script>
