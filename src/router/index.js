import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {path: '/TestEditor', component: () => import('@/views/TestEditor.vue')},
      {path: '/TestZipCode', component: () => import('@/views/TestZipCode.vue')},
      {path: '/Member',name: 'Member', component: () => import('@/views/Member.vue')},
      {path: '/TestApi', component: () => import('@/views/TestApi.vue')},
      {path: '/Member-search', component: () => import('@/views/Member-search.vue')},
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes
})

export default router
