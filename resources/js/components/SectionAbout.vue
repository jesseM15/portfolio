<template>
    <section id="section-about">
        <div id="coffee-bg-container">
            <svg id="coffee-bg" width="4150" height="300" viewBox="0 0 4150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4000 0H0V300H4000C4082.84 300 4150 232.843 4150 150C4150 67.1573 4082.84 0 4000 0Z" fill="#F4A261"/>
            </svg>
        </div>
        <div id="container-about" class="container p-grid">
            <div id="coffee-container" class="p-md-6 center">
                <transition appear @enter="coffeeAnimation">
                    <svg id="coffee" width="136" height="209" viewBox="0 0 136 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 58.7793C77.6143 58.7793 100 69.9722 100 83.7793V183.779C100 197.586 77.6143 208.779 50 208.779C22.3857 208.779 0 197.586 0 183.779V83.7793C0 69.9722 22.3857 58.7793 50 58.7793Z" fill="#E9C46A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.3333 146.446C66.3333 137.241 58.8714 129.779 49.6667 129.779C40.4619 129.779 33 137.241 33 146.446V170.446H33.0033C33.0011 170.501 33 170.557 33 170.613C33 172.914 34.8655 174.779 37.1667 174.779C39.4679 174.779 41.3333 172.914 41.3333 170.613C41.3333 172.914 43.1988 174.779 45.5 174.779C47.8012 174.779 49.6667 172.914 49.6667 170.613C49.6667 172.914 51.5321 174.779 53.8333 174.779C56.1345 174.779 58 172.914 58 170.613C58 172.914 59.8655 174.779 62.1667 174.779C64.4679 174.779 66.3333 172.914 66.3333 170.613C66.3333 170.557 66.3322 170.501 66.3301 170.446H66.3333V146.446ZM58 170.613C58 170.557 57.9989 170.501 57.9967 170.446H58.0033C58.0011 170.501 58 170.557 58 170.613ZM49.6634 170.446H49.6699C49.6678 170.501 49.6667 170.557 49.6667 170.613C49.6667 170.557 49.6656 170.501 49.6634 170.446ZM41.3366 170.446C41.3344 170.501 41.3333 170.557 41.3333 170.613C41.3333 170.557 41.3322 170.501 41.3301 170.446H41.3366Z" fill="#E76F51"/>
                    <circle cx="43.6667" cy="148.779" r="5" fill="white"/>
                    <circle cx="44.5" cy="149.613" r="4.16667" fill="#666666"/>
                    <circle cx="55.6667" cy="148.779" r="5" fill="white"/>
                    <circle cx="54.8333" cy="149.613" r="4.16667" fill="#666666"/>
                    <ellipse cx="50" cy="85.2793" rx="45" ry="22.5" fill="#D9B45A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11511 90.2793C10.6624 80.2594 28.5841 72.7793 50 72.7793C71.4159 72.7793 89.3376 80.2594 93.8849 90.2793C89.3376 100.299 71.4159 107.779 50 107.779C28.5841 107.779 10.6624 100.299 6.11511 90.2793Z" fill="#B9AB95"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M136 138.276C136 158.267 119.928 174.505 100 174.773V164.776C114.359 164.776 126 153.135 126 138.776C126 124.417 114.359 112.776 100 112.776V101.779C119.928 102.047 136 118.285 136 138.276Z" fill="#E9C46A"/>
                    <path id="vapor-1" d="M29.5698 50.2816C28.4415 65.125 35.7682 79.4658 39.5726 84.7808C41.9452 88.0736 54.0587 99.8275 53.2943 85.2444C52.5299 70.6613 75.9594 71.2161 80.8578 45.9474C85.7563 20.6788 63.2308 17.0937 41.7315 11.1748C20.2322 5.25587 52.6869 34.7382 46.2907 41.245C39.8945 47.7518 30.9801 31.7274 29.5698 50.2816Z" fill="#EEEEEE" fill-opacity="0.33"/>
                    <path id="vapor-2" d="M36.4964 62.58C35.3682 77.4234 32.5034 76.2862 39.4964 82.58C44.4964 87.08 53.4964 90.58 58.9964 76.08C64.4964 61.58 67.098 68.8487 71.9964 43.58C73.8381 34.0799 61.4963 26.58 51.9964 20.08C46.8259 16.5422 38.9965 18.5799 30.5662 26.58C24.0379 32.7752 37.9067 44.0257 36.4964 62.58Z" fill="#EEEEEE" fill-opacity="0.33"/>
                    <path id="vapor-3" d="M40.0392 52.2553C54.33 56.4234 42.131 87.7554 51.5392 87.7554C57.0356 87.7554 63.0392 80.7554 61.0392 74.7554C59.0392 68.7554 52.5391 61.2554 54.5391 58.2554C59.2459 51.1953 68.058 37.0167 65.058 23.0167C63.7453 16.8908 44.9883 16.0167 36.558 24.0167C30.0297 30.2119 28.0392 48.7553 40.0392 52.2553Z" fill="#EEEEEE" fill-opacity="0.33"/>
                    </svg>
                </transition>
            </div>
            <div id="about-text" class="p-md-6">
                <h1>About Me</h1>
                <p>
                    I am a full stack developer with over 4 years of professional experience.
                    I strive to create an optimal user experiences through elegant code that works across all platforms and devices.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        const coffeeAnimation = (el) => {
            gsap.set('#vapor-1', {opacity: 0, y: 20})
            gsap.set('#vapor-2', {opacity: 0, y: 20})
            gsap.set('#vapor-3', {opacity: 0, y: 20})

            let tl = gsap.timeline({repeat: -1, repeatRefresh: true})
            
            tl.to('#vapor-1', {duration: 1.5, opacity: 1, y: -10, x: "random(-10, 10)"})
            tl.to('#vapor-1', {duration: 0.5, opacity: 0, y: -20})
            tl.set('#vapor-1', {y: 20})

            tl.to('#vapor-2', {duration: 1.5, opacity: 1, y: -10, x: "random(-10, 10)"}, '-=1.5')
            tl.to('#vapor-2', {duration: 0.5, opacity: 0, y: -20})
            tl.set('#vapor-2', {y: 20})

            tl.to('#vapor-3', {duration: 1.5, opacity: 1, y: -10, x: "random(-10, 10)"}, '-=1.3')
            tl.to('#vapor-3', {duration: 0.5, opacity: 0, y: -20})
            tl.set('#vapor-3', {y: 20})
        }

        return {
            coffeeAnimation,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '~/app.scss';

    #section-about {
        padding: 4rem 0;
        overflow: hidden;
    }

    #coffee-container {
        position: relative;
    }

    #coffee-bg-container {
        position: relative;
    }

    #coffee-bg {
        position: absolute;
        right: 60vw;
        top: -2rem;
    }

    @media only screen and (max-width: 767px) {
        #coffee-bg {
            position: absolute;
            right: 20vw;
            top: -2rem;
        }

        #about-text {
            margin-top: 4rem;
        }
    }
</style>
