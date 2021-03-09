<template>
    <div id="app-component">
        <header>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <hr>
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
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import '../../sass/app';
</style>
