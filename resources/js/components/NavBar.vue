<template>
    <div id="navbar" class="container">
        <Menubar :model="items">
            <template #start>
                <router-link id="logo" to="/">Jesse <span id="logo-me">Me</span>rritt</router-link>
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
    @import '~/app.scss';

    .p-menubar {
        justify-content: space-between;
        background: #073B4C;
        border: none;
        padding: 1.5rem 0;
        font-family: 'Poppins', arial, sans-serif;
    }

    #logo {
        font-size: 1.5rem;
    }

    #logo-me {
        color: #E9C46A;
    }
</style>
