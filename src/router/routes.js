
import privateRoutes from './private/index';

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
        meta: {
          public: true
        },
        component: () => import('pages/login.vue')
      },
      {
        path: 'signup',
        name: 'signup-page',
        meta: {
          public: true
        },
        component: () => import('pages/signup.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'home-page' },
    children: privateRoutes
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
