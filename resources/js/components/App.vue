<template>
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
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import '../../sass/app';

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }


    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
