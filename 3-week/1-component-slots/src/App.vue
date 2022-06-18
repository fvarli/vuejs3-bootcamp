<template>
    <!--<SlotSection :onSave="onSave" :title="'Modal Title'" :content="content" />-->

    <SlotSection>
        <template #title>
            <h1>Title with Slot</h1>
        </template>
        <template v-slot:content>
            <p class="text-green">Text with Content</p>
        </template>
        <template #default>
            <p>Default</p>
        </template>
    </SlotSection>

</template>

<script>
import SlotSection from '@/components/SlotSection'

export default {
    name: 'App',
    components: {
        SlotSection
    },

    data() {
        return {
            content: `<h3 class="text-red">Modal Content</h3>`
        }
    },
    methods: {
        onSave() {
            alert("saved");
        }
    }
}
</script>
