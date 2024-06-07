import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App2.vue'
import router from './router/index2'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
