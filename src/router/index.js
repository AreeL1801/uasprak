import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Tugas1 from '../components/Tugas1.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/tugas1', component: Tugas1 },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
