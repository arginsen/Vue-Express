<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/products/productList.vue';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'In Stock',
    };
  },
  components: {
    'product-list': ProductList,
  },
};
</script>
