import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

// use webpackChunkName，component achieve lazy-loaded
// import Products from '@/views/admin/Products.vue';
// import Edit from '@/views/admin/Edit.vue';
// import Manufacturers from '@/views/admin/Manufacturers.vue';
// import NewManufacturers from '@/views/admin/NewManufacturers.vue';
// import EditManufacturers from '@/views/admin/EditManufacturers.vue';

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
      {
        path: 'manufacturers',
        name: 'Manufacturers',
        component: () => import(/* webpackChunkName: "Manufacturers" */ '../views/admin/Manufacturers.vue'),
      },
      {
        path: 'manufacturers/new',
        name: 'NewManufacturers',
        component: () => import(/* webpackChunkName: "NewManufacturers" */ '../views/admin/NewManufacturers.vue'),
      },
      {
        path: 'manufacturers/edit/:id',
        name: 'EditManufacturers',
        component: () => import(/* webpackChunkName: "EditManufacturers" */ '../views/admin/EditManufacturers.vue'),
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
