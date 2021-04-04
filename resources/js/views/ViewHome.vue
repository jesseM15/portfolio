<template>
    <div id="view-home">
        <section-hero></section-hero>
        <section-about></section-about>
        <section-skills></section-skills>
        <section-contact></section-contact>
    </div>
</template>

<script>
    import SectionHero from '@/components/SectionHero.vue'
    import SectionAbout from '@/components/SectionAbout.vue'
    import SectionSkills from '@/components/SectionSkills.vue'
    import SectionContact from '@/components/SectionContact.vue'

    export default {
        components: {
            SectionHero,
            SectionAbout,
            SectionSkills,
            SectionContact,
        }
    }
</script>
