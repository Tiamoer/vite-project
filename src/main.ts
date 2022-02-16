import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from './plugins/naive'
import 'vfonts/FiraCode.css'
import './assets/css/global.css'
import store from './store'

const app = createApp(App)
app.use(router).use(naive).use(store).mount('#app')
