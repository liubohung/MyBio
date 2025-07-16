import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'experience', component: () => import('pages/Experience.vue') },
      { path: 'projects', component: () => import('pages/Projects.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
