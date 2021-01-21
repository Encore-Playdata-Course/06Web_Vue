import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//vueRouter 사용하겠다는 설정
Vue.use(VueRouter)

// <router-link to="/">Home</router-link> |
// <router-link to="/about">About</router-link>

const routes = [
  {
    path: '/', //url 상에 오픈되는 url 및 router-link to 속성에 설정하는 값
    name: 'Home', //Home 값은 임의 설정이 가능하나 가급적 component명과 같게 권장
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  {
    path:'/playdata',
    name: 'Playdata',
    component: () => import('../views/Playdata.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
