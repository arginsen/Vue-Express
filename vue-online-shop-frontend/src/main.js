import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Antd);

// Add a rule.
// extend('secret', {
//   validate: (value) => value === 'example',
//   message: 'This is not the magic word',
// });

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
