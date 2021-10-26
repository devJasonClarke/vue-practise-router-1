import { createApp } from 'vue'
import VuePageTransition from 'vue-page-transition';
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(VuePageTransition).mount('#app')
