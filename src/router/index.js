import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
      },
      {
        path: '/profile',
        name: 'profile-config',
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
      },
      {
        path: '/profile/:id',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
      },
      {
        path: '/config',
        name: 'config',
        component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
      },
      {
        path: 'chat/:id',
        name: 'chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
      }
    ]
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/Notfound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.auth || localStorage.getItem("auth")) {
      next()
    } else {
      next({
        path: '/login'
      })      
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
