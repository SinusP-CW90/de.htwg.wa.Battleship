
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index',
        component: () => import('pages/Index.vue') },
      { path: '/aboutTheGame',
        component: () => import('pages/AboutTheGame.vue') },
      { path: '',
        component: () => import('pages/BattleshipGame.vue') },
      { path: '/page4',
        component: () => import('pages/Error404.vue') }
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
