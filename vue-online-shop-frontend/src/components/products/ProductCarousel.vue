<template>
  <div class="carousel">
    <a-carousel autoplay>
      <template v-for="product in products">
        <router-link
        :to="'/detail/' + product._id"
        :key="product._id"
        class="product-link">
          <img :src="product.image" alt="" class="product__image">
        </router-link>
      </template>
    </a-carousel>
  </div>
</template>

<style scoped>
.carousel {
  max-width: 700px;
  margin: 0 auto;
}

.ant-carousel >>> .slick-slide {
  max-height: 160px;
  background: #f1f4f8;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.product__image {
  width: 100%;
  display: inline-block;
}
</style>

<script>
export default {
  name: 'product-carousel',
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
};
</script>
