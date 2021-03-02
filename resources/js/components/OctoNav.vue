<template>
    <div id="nav">
        <div id="logo">
            <router-link to="/" exact>
                <svg width="24" height="28" viewBox="0 0 410 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42 346C18.804 346 -2.02786e-06 364.804 0 388C3.67176e-06 411.196 18.804 430 42 430H163C186.196 430 205 411.196 205 388C205 364.804 186.196 346 163 346H42Z" fill="#A35AFF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M89.6985 423.258C73.2965 439.66 73.2965 466.253 89.6985 482.655C106.101 499.057 132.693 499.057 149.095 482.655L234.655 397.095C251.057 380.693 251.057 354.1 234.655 337.698C218.253 321.296 191.66 321.296 175.258 337.698L89.6985 423.258Z" fill="#A35AFF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M247 346C223.804 346 205 364.804 205 388C205 411.196 223.804 430 247 430H368C391.196 430 410 411.196 410 388C410 364.804 391.196 346 368 346H247Z" fill="#A35AFF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M235.095 337.698C218.693 321.296 192.101 321.296 175.698 337.698C159.296 354.101 159.296 380.693 175.698 397.095L261.258 482.655C277.66 499.057 304.253 499.057 320.655 482.655C337.057 466.253 337.057 439.66 320.655 423.258L235.095 337.698Z" fill="#A35AFF"/>
                <ellipse cx="205.5" cy="186" rx="130.5" ry="186" fill="#A35AFF"/>
                <circle cx="260" cy="258" r="50" fill="white"/>
                <circle cx="254" cy="264" r="44" fill="#222222"/>
                <circle r="50" transform="matrix(-1 0 0 1 151 258)" fill="white"/>
                <circle r="44" transform="matrix(-1 0 0 1 157 264)" fill="#222222"/>
                </svg>
                &nbsp;Octopoke
            </router-link>
        </div>
        <div id="menu">
            <ul>
                <li><router-link to="/news">News</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li v-if="hasAuthUrl">
                    <a :href="auth.auth_url"><i class="fas fa-sign-in-alt"></i></a>
                </li>
                <li v-else>
                    Hi {{ auth.given_name }}&nbsp;<a href="/logout"><i class="fas fa-sign-out-alt"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/auth-data').then(response => this.auth = response.data)
            gsap.from("#logo", {duration: 0.5, scale: 0, ease: "back"})
            console.log('OctoNav mounted.')
        },

        data() {
            return {
                auth: {}
            }
        },

        methods: {
            containsKey(obj, key ) {
                return Object.keys(obj).includes(key)
            }
        },

        computed: {
            hasAuthUrl() {
                return this.containsKey(this.auth, 'auth_url')
            }
        }
    }
</script>

<style>
    #nav {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
    }

    #logo {
        padding: 1rem;
    }

    #menu ul {
        display: flex;
        list-style-type: none;
        margin: 0;
    }

    #menu ul li {
        margin: 0 1rem;
        padding: 1rem;
    }
</style>
