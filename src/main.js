import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FormPhoneBook from "@/components/FormPhoneBook.vue";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('./components/Home.vue')
    },
    {
      path: '/FormPhoneBook',
      name: 'FormPhoneBook',
      component: ()=> import('./components/FormPhoneBook.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

//createApp(App).mount('#app')

