<template>
    <div class="container">
        <div class="justify-content-between d-flex align-items-center">
            <button class="blue" @click="activeComponent='BColor'">Blue</button>
            <button class="green" @click="activeComponent='GColor'">Green</button>
            <button class="red" @click="activeComponent='RColor'">Red</button>
        </div>
        <div class="pt-2">
            <!--
            <BColor v-if="activeComponent === 'BColor'" class="mb-2" />
            <GColor v-if="activeComponent === 'GColor'" class="mb-2" />
            <RColor msg="Red Component" v-if="activeComponent === 'RColor'" class="mb-2" />
            -->
            {{ activeComponent }}
            <keep-alive>
                <component :is="activeComponent" msg="Red Component">
                    <h3 class="bg-green text-white">Green Component</h3>
                </component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import BColor from '@/components/BColor'
import GColor from '@/components/GColor'
import RColor from '@/components/RColor'
export default {
    components: {
        BColor,
        GColor,
        RColor
    },

    data(){
        return {
            activeComponent: 'RColor'
        }
    }
}
</script>
