<template>
    <div id="app-component">
        <header>
            <nav-bar></nav-bar>
        </header>
        <main>
            <view-home></view-home>
        </main>
        <footer>
            <footer-bar></footer-bar>
        </footer>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import ViewHome from '@/views/ViewHome.vue'
    import FooterBar from '@/components/FooterBar.vue'

    export default {
        name: 'App',

        components: {
            NavBar,
            ViewHome,
            FooterBar,
        },
    }
</script>

<style lang="scss">
    @import '~/app';
</style>
