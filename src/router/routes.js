import { createRouter, createWebHistory } from 'vue-router'
import BattleshipGame from '../pages/BattleshipGame.vue'
import Login from '../pages/Login.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index',
        name: 'Index',
        component: () => import('pages/Index.vue') },
      { path: '/aboutTheGame',
        name: 'About The Game',
        component: () => import('pages/AboutTheGame.vue'),
        meta: {
          requiresAuth: true
        }},

      { path: '',
        name: 'BattleshipGame',
        component: () => import('pages/BattleshipGame.vue'),
        meta: {
          requiresAuth: true
        }},
      { path: '/page4',
        name: 'Error404',
        component: () => import('pages/Error404.vue') },
      { path: '/login',
        name: 'Login',
        component: () => import('pages/Login.vue') }
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
