<template>
    <svg id="bottom-wave-bg"  viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1000 99.9999L1000 35.1377C1000 35.1377 948.923 92.123 747.621 93.1228C640.247 93.6561 550.253 68.0204 464.267 43.5261C389.049 22.0994 316.897 1.54612 238.858 0.146704C71.6074 -2.85255 5.58891e-05 41.1362 5.58891e-05 41.1362L6.10352e-05 100L1000 99.9999Z" fill="#073B4C"/>
    </svg>
    <section id="section-contact">
        <div id="container-contact" class="container p-grid">
            <div class="p-col-12">
                <div class="icon-container">
                    <i class="pi pi-envelope icon contact"></i>
                </div>
                <div class="section-text">
                    <h1>Contact</h1>
                </div>
            </div>
            <div class="p-md-6 center">
                <svg id="mailbox" width="320" height="327" viewBox="0 0 320 327" fill="none" xmlns="http://www.w3.org/2000/svg" class="responsive">
                <path d="M95.0629 96.1459C76.2273 108.677 63.9445 169.084 122.524 282.137C132.652 301.683 161.87 303.887 184.335 297.937C212.415 290.499 268.481 205.414 283.839 153.502C299.196 101.59 206.328 40.161 159.393 23.1312C112.459 6.10145 116.59 40.8318 114.899 56.246C113.207 71.6603 113.899 83.615 95.0629 96.1459Z" fill="#D0E9F1"/>
                <rect width="36.7589" height="26.2563" transform="matrix(-1 0 0 1 186.42 99.774)" fill="#CCCCCC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M139.159 110.292V126.03H160.164V110.277H160.164C160.164 110.277 160.164 110.277 160.164 110.277C160.164 104.476 155.461 99.774 149.661 99.774C143.861 99.774 139.159 104.476 139.159 110.277C139.159 110.282 139.159 110.287 139.159 110.292Z" fill="#C4C4C4"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M175.917 110.277C175.917 110.277 175.917 110.277 175.917 110.277C175.917 104.476 180.62 99.774 186.42 99.774C192.22 99.774 196.923 104.476 196.923 110.277C196.923 110.286 196.923 110.295 196.923 110.304V126.03H175.917V110.277H175.917Z" fill="#CCCCCC"/>
                <rect x="168.041" y="126.031" width="10.5025" height="87.6962" fill="#E0D2C5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M174.342 112.902L174.342 115.003L174.342 115.003V118.153H171.191L171.191 115.003L163.84 115.003V112.902L174.342 112.902Z" fill="#CE1B1B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M251.511 222.567C228.637 214.663 201.094 210.051 171.454 210.051C143.598 210.051 117.594 214.125 95.5765 221.176C102.117 239.46 110.933 259.768 122.524 282.137C132.652 301.683 161.87 303.887 184.335 297.937C201.5 293.39 229.122 259.829 251.511 222.567Z" fill="#2A9D8F"/>
                <path d="M185.367 206.308C185.367 206.308 188.476 206.383 190.884 197.185C189.728 206.479 192.575 205.817 194.822 211.626C187.691 211.8 182.546 216.607 173.331 216.615C163.74 216.623 148.776 213.085 148.776 213.085C148.776 213.085 154.072 203.888 155.035 200.015C155.196 202.597 156.191 207.954 158.887 208.729C161.583 209.503 163.541 198.402 164.183 192.754C164.825 197.434 166.687 206.696 168.998 206.308C171.309 205.921 172.849 193.238 173.331 186.945C173.652 193.722 174.968 207.567 177.664 208.729C181.034 210.181 181.034 186.461 181.997 192.754C182.767 197.789 181.997 203.888 185.367 206.308Z" fill="#2A9D8F"/>
                </svg>
            </div>
            <div class="p-md-6">
                <contact-form></contact-form>
            </div>
        </div>
    </section>
</template>

<script>
    import ContactForm from '@/components/ContactForm.vue'
    export default {
        components: {
            ContactForm,
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/app.scss';

    #section-contact {
        padding: 2rem 0;
        background: $body-bg;
        color: $body-color;
    }

    #bottom-wave-bg {
        width: 100%;
        display: block;
        position: relative;
        bottom: -1px;
    }

    .icon.contact {
        color: #174B5C;
        border-color: #174B5C;
        left: 5rem;
        top: -2rem;
    }

    #mailbox {
        position: relative;
        z-index: 10;
    }

    @media only screen and (max-width: $tablet) {
        .icon.contact {
            left: 2rem;
        }
    }
</style>
