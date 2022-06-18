<template>
    <div class="container">
        <div class="header">
            <slot name="title" />
        </div>
        <hr>
        <div class="content my-2">
            <slot name="content" />
        </div>
        <slot/>
        <hr>
        <div class="footer text-right">
            <button>Close</button>
            <button class="green" @click="onSave">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content','title','onSave']
}
</script>
