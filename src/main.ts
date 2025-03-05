import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import store from './store'



const app = createApp(App).use(store).use(store);
app.use(router).use(store).mount('#app');