<template>
    <section id="section-hero">
        <div id="container-hero" class="container p-grid">
            <div id="devices" class="p-md-6 center">
                <transition appear @enter="deviceAnimation">
                    <svg width="414" height="344" viewBox="0 0 414 344" fill="none" xmlns="http://www.w3.org/2000/svg" class="responsive">
                    <path d="M23.4361 197.335C124.816 96.2195 1.56388 145.312 95 48.3629C104.457 39.2739 145.106 8.11926 179 2.36288C221.368 -4.83258 256.573 3.50682 277 39.8629C297.427 76.2189 258.922 74.4581 300.718 114.019C342.33 153.404 358.107 155.988 388.48 181.863C432.5 219.363 408 250.863 388.48 275.363C363.543 306.663 326.14 324.261 274.5 310.863C236.859 301.097 208.039 303.752 159.24 336.321C110.441 368.89 -62.1134 282.661 23.4361 197.335Z" fill="#174B5C"/>
                    <g id="desktop">                        
                        <rect x="149" y="64" width="203.474" height="127.098" rx="12" fill="#666666"/>
                        <rect id="desktop-off" x="151.949" y="65.7693" width="197.577" height="123.559" rx="12" fill="#333333"/>
                        <g id="desktop-on">
                            <rect x="151.949" y="65.7693" width="197.577" height="123.559" rx="12" fill="white"/>
                            <rect x="191.759" y="121.209" width="117.956" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                            <rect x="191.759" y="148.044" width="29.4891" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                            <rect x="256.635" y="172.52" width="53.0803" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                            <rect x="191.759" y="172.225" width="53.0803" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                            <rect x="191.759" y="65.7693" width="117.956" height="41.2847" rx="10" fill="#C4C4C4"/>
                            <rect x="280.226" y="148.044" width="29.4891" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                            <rect x="235.993" y="148.044" width="29.4891" height="12.6803" rx="6.34015" fill="#C4C4C4"/>
                        </g>
                        <path d="M206.504 233.562C206.504 230.305 209.144 227.664 212.401 227.664H289.073C292.33 227.664 294.971 230.305 294.971 233.562H206.504Z" fill="#666666"/>
                        <path d="M244.839 191.098H256.635V223.536H244.839V191.098Z" fill="#666666"/>
                        <path d="M238.942 227.664C238.942 225.384 240.79 223.536 243.07 223.536H258.404C260.684 223.536 262.533 225.384 262.533 227.664H238.942Z" fill="#666666"/>
                    </g>
                    <g id="laptop">
                        <path d="M59.3067 198.694L184.018 232.11L147.83 292.84C145.003 297.584 138.386 300.272 133.052 298.842L27.6593 270.602C22.3246 269.173 20.2918 264.168 23.1189 259.424L59.3067 198.694Z" fill="#666666"/>
                        <rect width="111.761" height="44.7852" rx="4" transform="matrix(0.965926 0.258819 -0.511893 0.859049 65.8386 203.66)" fill="#777777"/>
                        <rect width="36.3123" height="26.629" rx="4" transform="matrix(0.965926 0.258819 -0.511893 0.859049 78.1016 254.375)" fill="#777777"/>
                        <path d="M183.865 232.099L59.154 198.683L60.3261 127.999C60.4176 122.477 64.8165 119.159 70.1511 120.588L175.544 148.828C180.878 150.257 185.129 155.893 185.037 161.415L183.865 232.099Z" fill="#666666"/>
                        <rect id="laptop-off" width="122.251" height="72.6246" rx="4" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 63.5428 122.87)" fill="#333333"/>
                        <g id="laptop-on">
                            <rect width="122.251" height="72.6246" rx="4" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 63.5428 122.87)" fill="white"/>
                            <rect width="94.0085" height="35.1019" rx="5" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 75.6242 126.107)" fill="#C4C4C4"/>
                            <rect width="94.0085" height="8.0694" rx="4.0347" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 74.9352 167.658)" fill="#C4C4C4"/>
                            <rect width="29.8568" height="8.0694" rx="4.0347" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 74.6944 182.181)" fill="#C4C4C4"/>
                            <rect width="29.8568" height="8.0694" rx="4.0347" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 136.66 198.785)" fill="#C4C4C4"/>
                            <rect width="30.2603" height="8.0694" rx="4.0347" transform="matrix(0.965926 0.258819 -0.0165799 0.999863 105.482 190.431)" fill="#C4C4C4"/>
                        </g>
                    </g>
                    <g id="mobile">
                        <rect width="37.8444" height="67.6" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 280.558 218.944)" fill="#666666"/>
                        <rect id="mobile-off" width="36.1111" height="64.5667" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 282.135 219.961)" fill="#333333"/>
                        <g id="mobile-on">
                            <rect width="36.1111" height="64.5667" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 282.135 219.961)" fill="white"/>
                            <path d="M284.008 223.001C282.878 221.103 283.691 219.101 285.824 218.529L312.87 211.283C315.004 210.711 317.651 211.786 318.782 213.683L330.555 233.442L295.782 242.759L284.008 223.001Z" fill="#C4C4C4"/>
                            <rect width="33.9444" height="8.66667" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 298.639 245.757)" fill="#C4C4C4"/>
                            <rect width="33.9444" height="8.66667" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 310.617 265.859)" fill="#C4C4C4"/>
                            <rect width="33.9444" height="8.66667" rx="4" transform="matrix(0.965926 -0.258819 0.511893 0.859049 304.628 255.808)" fill="#C4C4C4"/>
                        </g>
                        <path d="M286.063 229.269C285.9 228.995 286.017 228.706 286.325 228.623L288.1 231.601C287.792 231.684 287.409 231.528 287.246 231.254L286.063 229.269Z" fill="#666666"/>
                        <path d="M328.688 227.489C328.852 227.763 328.734 228.052 328.426 228.135L326.651 225.156C326.96 225.074 327.342 225.229 327.505 225.503L328.688 227.489Z" fill="#666666"/>
                        <path d="M287.838 232.247C287.674 231.973 287.792 231.684 288.1 231.601L289.875 234.579C289.566 234.662 289.184 234.506 289.021 234.232L287.838 232.247Z" fill="#666666"/>
                        <path d="M290.721 237.086C290.558 236.812 290.675 236.523 290.984 236.44L292.758 239.418C292.45 239.501 292.068 239.346 291.904 239.072L290.721 237.086Z" fill="#666666"/>
                    </g>
                    </svg>
                </transition>
            </div>
            <div class="p-md-6 center">
                <div id="tagline-intro">Hi there, I am a full stack</div>
                <br>
                <div id="tagline">Web Developer</div>
                <Button id="cta" label="Contact Me" class="p-button-raised p-button-rounded p-button-lg"  @click="scrollToContact($event)" />
                <br><br>
                <a href="https://github.com/jessem15" target="_blank"><i class="pi pi-github social"></i></a>
            </div>
        </div>
    </section>
    <svg id="top-wave-bg" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L0 64.8622C0 64.8622 51.0766 7.87689 252.379 6.87714C359.753 6.34388 449.747 31.9795 535.733 56.4739C610.951 77.9005 683.103 98.4538 761.142 99.8533C928.393 102.853 1000 58.8638 1000 58.8638V0H0Z" fill="#073B4C"/>
    </svg>
</template>

<script>
export default {
    setup() {
        const scrollToContact = (e) => {
            document.querySelector('#section-contact').scrollIntoView({behavior: 'smooth'})
        }

        const deviceAnimation = (el) => {
            gsap.set('#desktop-on', {opacity: 0})
            gsap.set('#laptop-on', {opacity: 0})
            gsap.set('#mobile-on', {opacity: 0})

            gsap.from('#desktop', {duration: 1, delay: 0.2, x: 30, y: 100, scale: 0.01, ease: 'back'})
            gsap.from('#laptop', {duration: 1, delay: 0.3, x: 150, y: 10, scale: 0.01, ease: 'back'})
            gsap.from('#mobile', {duration: 1, delay: 0.4, x: -50, y: -10, scale: 0.01, ease: 'back'})

            gsap.set('#desktop-on', {delay: 1.6, opacity: 1})
            gsap.set('#laptop-on', {delay: 1.9, opacity: 1})
            gsap.set('#mobile-on', {delay: 2, opacity: 1})
        }

        return {
            scrollToContact,
            deviceAnimation,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '~/app.scss';

    #section-hero {
        background: $body-bg;
        padding: 8rem 0 4rem 0;
    }

    #container-hero {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $body-color;
    }

    #tagline-intro {
        font-size: 1.5rem;
    }

    #tagline {
        font-size: 4rem;
        font-weight: 300;
    }

    #cta {
        margin: 4rem 0 0 0;
    }

    #top-wave-bg {
        width: 100%;
    }

    .p-button {
        color: #000;
        background: #d9b45a;
        font-family: $font-family-sans-serif;
    }

    .p-button:hover {
        color: #000;
        background: #f0b216;
    }

    .social {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: $tablet) {
        #tagline {
            font-size: 2.5rem;
        }

        #cta {
            margin: 2rem 0 0 0;
        }
    }
</style>
