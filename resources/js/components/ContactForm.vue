<template>
    <div id="contact-form">
        <transition name="fade-contact-form" mode="out-in">
            <Card v-if="!contactFormSubmitted">
                <template #content>
                    <small id="contact-form-legend">* Required field</small>
                    <br>
                    <form id="contact-form" @submit.prevent="onSubmit" novalidate>
                        <div class="input-group">
                            <span class="p-float-label">
                                <InputText id="contact-form-name" class="contact-form-input" type="text" v-model="contactFormName" />
                                <label for="contact-form-name">Name*</label>
                            </span>
                            <small id="contact-form-error-name" class="p-error"></small>
                        </div>
                        <div class="input-group">
                            <span class="p-float-label">
                                <InputText id="contact-form-email" class="contact-form-input" type="email" v-model="contactFormEmail" />
                                <label for="contact-form-email">Email*</label>
                            </span>
                            <small id="contact-form-error-email" class="p-error"></small>
                        </div>
                        <div class="input-group">
                            <span class="p-float-label">
                                <Textarea id="contact-form-message" class="contact-form-input" v-model="contactFormMessage" :autoResize="true" rows="5" />
                                <label for="contact-form-message">Message*</label>
                            </span>
                            <small id="contact-form-error-message" class="p-error"></small>
                        </div>
                        <div class="input-group">
                            <Button type="submit" label="Send" class="p-d-block p-mx-auto" />
                            <!-- IMPORTANT: Do not remove! This message is required in order to use google recaptcha without displaying widget -->
                            <!-- See: https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-v3-badge-what-is-allowed -->
                            <div id="required-recaptcha-message">
                                This site is protected by reCAPTCHA and the Google
                                <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                            </div>
                        </div>
                    </form>
                </template>
            </Card>
            <Card v-else>
                <template #title>
                    <div class="center">Thank you!</div>
                </template>
                <template #content>
                    <p id="contact-form-thanks" class="center">Your feedback is important to me.</p>
                </template>
            </Card>
        </transition>
    </div>
</template>

<script>
    import Card from 'primevue/card'
    import InputText from 'primevue/inputtext'
    import Textarea from 'primevue/textarea'
    import { ref, onMounted } from 'vue'
    import { useReCaptcha } from 'vue-recaptcha-v3'
    
    export default {
        components: {
            Card,
            InputText,
            Textarea,
        },

        setup(props, context) {
            onMounted(() => {console.log('ContactForm mounted.')})

            let contactFormName = ref(null)
            let contactFormEmail = ref(null)
            let contactFormMessage = ref(null)
            let contactFormSubmitted = ref(false)

            const onSubmit = () => {
                let contactForm = {
                    name: contactFormName.value,
                    email: contactFormEmail.value,
                    message: contactFormMessage.value,
                }

                document.querySelector('#contact-form-name').classList.remove('p-invalid')
                document.querySelector('#contact-form-email').classList.remove('p-invalid')
                document.querySelector('#contact-form-message').classList.remove('p-invalid')
                document.querySelector('#contact-form-error-name').innerHTML = ''
                document.querySelector('#contact-form-error-email').innerHTML = ''
                document.querySelector('#contact-form-error-message').innerHTML = ''

                recaptcha(contactForm)
            }

            const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

            const recaptcha = async (contactForm) => {
                // (optional) Wait until recaptcha has been loaded.
                await recaptchaLoaded()
            
                // Execute reCAPTCHA with action "login".
                const token = await executeRecaptcha('contactFormSubmitted')
            
                // Do stuff with the received token.
                contactForm.recaptcha_response = token

                const options = {
                    method: 'post',
                    url: 'api/contact-form',
                    data: contactForm,
                }

                // send the request
                axios(options)
                .then(function (response) {
                    if (response.data.success) {
                        contactFormSubmitted.value = true
                    }
                })
                .catch(function (error) {
                    if (error !== 'undefined') {
                        Object.keys(error.response.data.errors).forEach(function (item) {
                            document.getElementById('contact-form-' + item).classList.add('p-invalid')
                            document.getElementById('contact-form-error-' + item).innerHTML = error.response.data.errors[item][0]
                        })
                    }
                })
                .then(function () {

                })
            }

            return {
                contactFormName,
                contactFormEmail,
                contactFormMessage,
                contactFormSubmitted,
                onSubmit,
                recaptcha,
            }
        },
    }
</script>

<style scoped lang="scss">
    #contact-form-legend {
        float: right;
        position: relative;
        top: -14px;
    }

    .input-group:not(:first-child) {
        margin-top: 1.8rem;
    }

    .contact-form-input {
        width: 100%;
    }

    .p-float-label label {
        margin-bottom: 16px;
    }

    #required-recaptcha-message {
        margin-top: 1rem;
        font-size: 80%;
        color: #999;
    }

    #required-recaptcha-message a {
        font-size: 90%;
    }

    #contact-form-thanks {
        font-size: 80%;
    }

    .fade-contact-form-enter-active,
    .fade-contact-form-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-contact-form-enter-from,
    .fade-contact-form-leave-to {
        opacity: 0;
    }
</style>