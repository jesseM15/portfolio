<template>
    <div id="navbar">
        <Menubar :model="items">
            <template #start>
                <router-link to="/">Jesse Merritt</router-link>
            </template>
        </Menubar>
    </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import { reactive } from 'vue'

export default {
    components: {
        Menubar,
    },

    setup() {
        const items = reactive([
            {
                label: 'About',
                to: '/about',
            },
            {
                label: 'Portfolio',
                to: '/portfolio',
            },
            {
                label: 'Contact',
                to: '/contact',
            },
        ])

        return {
            items,
        }
    },
}
</script>

<style lang="scss" scoped>
    .p-menubar {
        justify-content: space-between;
    }
</style>
