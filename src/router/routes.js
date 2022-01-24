import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import User from '../pages/User.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/aboutTheGame',
        name: 'About The Game',
        component: () => import('pages/AboutTheGame.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '',
        name: 'BattleshipGame',
        component: () => import('pages/BattleshipGame.vue'),
        meta: {
          requiresAuth: true
        }
      },
      /*{ path: '/err404',
        name: 'Error404',
        component: () => import('pages/Error404.vue') },*/
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },

      {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/secretPage',
        name: 'SecretPage',
        component: () => import('pages/SecretPage.vue'),
        meta: {
          //authorize: [auth.currentUser.role]
        }

      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

/*
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})
*/
export default routes

