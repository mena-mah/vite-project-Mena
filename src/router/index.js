import { createRouter, createWebHistory } from 'vue-router'
import WarehouseTransfers from '../pages/WarehouseTransfers.vue'
import Settings from '../pages/Settings.vue'


const routes = [
  { path: '/', name: 'WarehouseTransfers', component: WarehouseTransfers },
  { path: '/Settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
