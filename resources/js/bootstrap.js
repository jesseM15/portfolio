import axios from 'axios'
import { gsap } from 'gsap'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VueGtag from 'vue-gtag-next'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'


window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.gsap = gsap

const app = createApp(App)
app.use(router)
app.use(VueGtag, { property: { id: 'G-Q9BL9S17DL' } })
app.use(VueReCaptcha, { siteKey: process.env.RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } })
app.use(PrimeVue, {ripple: true})
app.component('Button', Button)
router.isReady().then(() => app.mount('#app'))
