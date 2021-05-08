import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'

import commonMixin from "@/plugins/mixins";

createApp({ ...App, mixins: [commonMixin] }).use(store).use(router).mount('#app')

