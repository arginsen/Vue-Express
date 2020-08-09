import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/Index.vue'),
    children: [
      {
        path: 'new',
        name: 'New',
        component: () => import(/* webpackChunkName: "New" */ '../views/admin/New.vue'),
      },
      {
        path: '',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Products" */ '../views/admin/Products.vue'),
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: () => import(/* webpackChunkName: "Edit" */ '../views/admin/Edit.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
