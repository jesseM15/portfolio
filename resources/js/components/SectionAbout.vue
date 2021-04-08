<template>
    <section id="section-about">
        <div id="coffee-bg-container">
            <svg id="coffee-bg" width="4150" height="300" viewBox="0 0 4150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4000 0H0V300H4000C4082.84 300 4150 232.843 4150 150C4150 67.1573 4082.84 0 4000 0Z" fill="#174B5C"/>
            </svg>
        </div>
        <div id="container-about" class="container p-grid">
            <div id="coffee-container" class="p-md-6 center">
                <transition appear @enter="coffeeAnimation">
                    <svg id="coffee" width="136" height="200" viewBox="0 0 136 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 49.7793C77.6143 49.7793 100 60.9722 100 74.7793V174.779C100 188.586 77.6143 199.779 50 199.779C22.3857 199.779 0 188.586 0 174.779V74.7793C0 60.9722 22.3857 49.7793 50 49.7793Z" fill="#E9C46A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.3333 137.446C66.3333 128.241 58.8714 120.779 49.6667 120.779C40.4619 120.779 33 128.241 33 137.446V161.446H33.0033C33.0011 161.501 33 161.557 33 161.613C33 163.914 34.8655 165.779 37.1667 165.779C39.4679 165.779 41.3333 163.914 41.3333 161.613C41.3333 163.914 43.1988 165.779 45.5 165.779C47.8012 165.779 49.6667 163.914 49.6667 161.613C49.6667 163.914 51.5321 165.779 53.8333 165.779C56.1345 165.779 58 163.914 58 161.613C58 163.914 59.8655 165.779 62.1667 165.779C64.4679 165.779 66.3333 163.914 66.3333 161.613C66.3333 161.557 66.3322 161.501 66.3301 161.446H66.3333V137.446ZM58 161.613C58 161.557 57.9989 161.501 57.9967 161.446H58.0033C58.0011 161.501 58 161.557 58 161.613ZM49.6634 161.446H49.6699C49.6678 161.501 49.6667 161.557 49.6667 161.613C49.6667 161.557 49.6656 161.501 49.6634 161.446ZM41.3366 161.446C41.3344 161.501 41.3333 161.557 41.3333 161.613C41.3333 161.557 41.3322 161.501 41.3301 161.446H41.3366Z" fill="#E76F51"/>
                    <circle cx="43.6667" cy="139.779" r="5" fill="white"/>
                    <circle cx="44.5" cy="140.613" r="4.16667" fill="#666666"/>
                    <circle cx="55.6667" cy="139.779" r="5" fill="white"/>
                    <circle cx="54.8333" cy="140.613" r="4.16667" fill="#666666"/>
                    <ellipse cx="50" cy="76.2793" rx="45" ry="22.5" fill="#D9B45A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11511 81.2793C10.6624 71.2594 28.5841 63.7793 50 63.7793C71.4159 63.7793 89.3376 71.2594 93.8849 81.2793C89.3376 91.2993 71.4159 98.7793 50 98.7793C28.5841 98.7793 10.6624 91.2993 6.11511 81.2793Z" fill="#B9AB95"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M136 129.276C136 149.267 119.928 165.505 100 165.773V155.776C114.359 155.776 126 144.135 126 129.776C126 115.417 114.359 103.776 100 103.776V92.7793C119.928 93.0469 136 109.285 136 129.276Z" fill="#E9C46A"/>
                    <g id="vapor-container">
                        <rect class="vapor" x="34" y="20" width="30" height="50" rx="15" fill="white" fill-opacity="0.33"/>
                        <rect class="vapor" x="51" y="20" width="30" height="50" rx="15" fill="white" fill-opacity="0.33"/>
                        <rect class="vapor" x="18" y="20" width="30" height="50" rx="15" fill="white" fill-opacity="0.33"/>
                    </g>
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
            let tl = gsap.timeline({repeat: -1})
            let targets = document.querySelectorAll(".vapor")
            let numberOfTargets = targets.length

            let duration = 3
            let pause = -1

            let stagger = duration + pause
            let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

            gsap.set("#vapor-container", {autoAlpha: 1})
            tl.from(targets, {y: 20, duration: duration, opacity: 0, stagger: {
                each: stagger,
                repeat: -1,
                repeatDelay: repeatDelay
            }})
                .to(targets, {y: -10, duration: duration, opacity: 0, stagger: {
                each: stagger,
                repeat: -1,
                repeatDelay: repeatDelay
            }}, stagger)
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
