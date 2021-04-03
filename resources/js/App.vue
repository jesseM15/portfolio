<template>
    <div id="app-component">
        <header>
            <nav-bar></nav-bar>
        </header>
        <main>
            <view-home></view-home>
        </main>
        <footer>
            &copy;2021 jfry
        </footer>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import ViewHome from '@/views/ViewHome.vue'

    export default {
        name: 'App',

        components: {
            NavBar,
            ViewHome,
        },
    }
</script>

<style lang="scss">
    @import '~/app';
</style>
