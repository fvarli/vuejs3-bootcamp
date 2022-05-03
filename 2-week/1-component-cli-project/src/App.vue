<template>
    <app-header></app-header>
    <div class="container pt-2">
        <h3 class="text-center">First CLI App</h3>
    </div>
    <CounterItem></CounterItem>
    <CounterItem></CounterItem>
</template>

<script>
import CounterItem from "@/components/CounterItem";

export default {
    components: {
        CounterItem: CounterItem
    }
}
</script>
