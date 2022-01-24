import {createRouter, createWebHistory} from 'vue-router'

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
        component: () => import('pages/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('pages/Register.vue')
      },

      {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('pages/User.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/secretPage',
        name: 'SecretPage',
        component: () => import('pages/SecretPage.vue')
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

export default routes
