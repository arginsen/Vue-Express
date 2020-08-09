<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to the Home Page',
    };
  },
  components: {
    'product-list': ProductList,
  },
};
</script>
