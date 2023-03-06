export default [
  {
    path: 'home',
    name: 'home-page',
    component: () => import('src/pages/private/home/Index.vue'),
    redirect: { name: 'home-page-content' },
    children: [
      {
        path: '',
        name: 'home-page-content',
        props: true,
        component: () => import('src/pages/private/home/Home.vue')
      }
    ]
  }
];
