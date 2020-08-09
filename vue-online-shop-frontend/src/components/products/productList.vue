<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
        <product-item :product="product" :key="product._id"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) {
      // get data with action
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    // a computed getter
    products() {
      return this.$store.state.products;
    },
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>
