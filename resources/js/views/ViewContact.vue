<template>
    <div id="view-contact">
        <div class="p-grid">
            <div class="p-col-12">
                <h1>Contact Page</h1>
            </div>
            <div class="p-col-12 p-md-6">
                <p>lorem ipsum</p>
            </div>
            <div class="p-col-12 p-md-6">
                <contact-form></contact-form>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from '@/components/ContactForm.vue'
    export default {
        components: {
            ContactForm,
        }
    }
</script>
