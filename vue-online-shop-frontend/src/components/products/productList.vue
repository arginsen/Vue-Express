<template>
  <div class="products">
    <template v-for="product in products">
      <product-item
        :product="product"
        :key="product._id">
      </product-item>
    </template>
  </div>
</template>

<style scoped>
.products {
  /* padding: 30px; */
  margin: 20px auto;
}
</style>

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
    // get products, delivery product to child-component by v-for
    products() {
      return this.$store.getters.allProducts;
    },
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>
