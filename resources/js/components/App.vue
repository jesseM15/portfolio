<template>
    <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <hr>
    </header>
    <main>
        <router-view></router-view>
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
</style>
