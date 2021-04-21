<template>
    <div id="navbar">
        <div class="container">
            <Menubar :model="items">
                <template #start>
                    <a id="logo" @click="scrollToHero($event)">Jesse <span id="logo-me">Me</span>rritt</a>
                </template>
            </Menubar>
        </div>
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
                icon: 'pi pi-fw pi-question',
                command: (event) => {
                    document.querySelector('#section-about').scrollIntoView({behavior: 'smooth'})
                }
            },
            {
                label: 'Skills',
                icon: 'pi pi-fw pi-desktop',
                command: (event) => {
                    document.querySelector('#section-skills').scrollIntoView({behavior: 'smooth'})
                }
            },
            {
                label: 'Contact',
                icon: 'pi pi-fw pi-envelope',
                command: (event) => {
                    document.querySelector('#section-contact').scrollIntoView({behavior: 'smooth'})
                }
            },
        ])

        const scrollToHero = (e) => {
            document.querySelector('#section-hero').scrollIntoView({behavior: 'smooth'})
        }

        return {
            items,
            scrollToHero,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '~/app.scss';

    #navbar {
        width: 100%;
        background: #073b4cee;
        position: fixed;
    }

    .p-menubar {
        justify-content: space-between;
        background: transparent;
        border: none;
        padding: 1.5rem 0;
        font-family: $font-family-sans-serif;
    }

    #logo {
        font-size: 1.5rem;
        cursor: pointer;
    }

    #logo-me {
        color: #E9C46A;
    }
</style>
