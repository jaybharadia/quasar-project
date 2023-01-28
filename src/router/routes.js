
const routes = [

  {
    path: '/public',
    name: 'public',
    component: () => import('layouts/AuthLayout.vue'),
    redirect: 'login',
    children: [
      {
        path: 'login',
        name: 'login-page',
        component: () => import('pages/login.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
