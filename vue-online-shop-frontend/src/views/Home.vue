<template>
  <div>
    <div class="container">
      <product-carousel></product-carousel>
      <product-list></product-list>
    </div>
    <footer class="footer">
      <span style="display:block">© 2020 淘机客 中国互联网举报中心</span>
      京ICP证1401号京ICP备125439号-3京公网安备
    </footer>
  </div>
</template>

<style>
.container {
  margin-top: 20px;
  /* margin-bottom: 20px; */
}

.footer {
  margin-top: 20px;
  padding: 40px 10px;
  text-align: center;
  color: #999;
  background: #eee;
}
</style>

<script>
// import ProductCarousel from '@/components/products/ProductCarousel.vue';
// import ProductList from '@/components/products/ProductList.vue';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to the Home Page',
    };
  },
  components: {
    'product-carousel': () => import('@/components/products/ProductCarousel'),
    'product-list': () => import('@/components/products/ProductList'),
  },
};
</script>
