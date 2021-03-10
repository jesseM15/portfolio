<template>
    <div id="app-component">
        <header>
            <nav-bar></nav-bar>
        </header>
        <main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <footer>
            &copy;2021 jfry
        </footer>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'

    export default {
        name: 'App',

        components: {
            NavBar,
        },
    }
</script>

<style lang="scss">
    @import '../../sass/app';
</style>
