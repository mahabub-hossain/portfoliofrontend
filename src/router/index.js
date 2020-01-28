import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detailspro from '../views/Detailspro.vue'
import Blog from '../views/Blog.vue'
import Detailblog from '../views/Detailblog.vue'
Vue.use(VueRouter)
const routes = [
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail-project',
    name: 'detail-project',
    component: Detailspro
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/detial-blog',
    name: 'Detailblog',
    component: Detailblog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 10 };
  }
})

export default router
