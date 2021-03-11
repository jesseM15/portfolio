import axios from 'axios';

import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import router from '@/router';



window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App).use(PrimeVue).use(router).mount('#app');
