import axios from 'axios';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { VueReCaptcha } from 'vue-recaptcha-v3'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';


window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = createApp(App)
app.use(router)
app.use(VueReCaptcha, { siteKey: process.env.MIX_RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } })
app.use(PrimeVue)
app.component('Button', Button)
router.isReady().then(() => app.mount('#app'))
