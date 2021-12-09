import App from './App.vue'

import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: Home},
        {path:'/about', component: About}
    ]
})
const app = createApp(App).use(router)
app.mount('#app')
