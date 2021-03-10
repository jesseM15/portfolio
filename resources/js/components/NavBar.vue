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
import Menubar from 'primevue/menubar';

export default {
    components: {
        Menubar,
    },

    data() {
        return {
            items: [
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
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    .p-menubar {
        justify-content: space-between;
    }
</style>
