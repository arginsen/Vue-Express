<template>
  <div class="cart">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <template v-for="product in cart">
      <product-item :product="product" :key="product._id"></product-item>
    </template>
    <h3 v-if="sum > 0" class="cart-bottom">
      <span>合计:</span><span class="sum">￥{{ sum }}</span>
      <a-button class="settlement" type="primary" shape="round">结算</a-button>
    </h3>
    <h3 v-else class="cart-empty">
      <a-icon
        type="shopping-cart"
        :style="{ fontSize: '30px', color: '#d0d4da' }" />
      <div slot="description" class="description">购物车暂无物品...</div>
      <a href="/">
        <a-button type="primary">去购物</a-button>
      </a>
    </h3>
  </div>
</template>

<style>
.cart-bottom,
.cart-bottom > span {
  width: 450px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  vertical-align: middle;
}

.cart-bottom > .sum {
  color: lightcoral;
  font-weight: bold;
  vertical-align: bottom;
  font-size: 1.2rem;
}

.cart-bottom .settlement {
  margin-left: 20px;
  width: 80px;
  font-size: 1rem;
}

.cart-empty {
  margin-top: 15%;
}

.description {
  margin: 1rem 0 4rem 0;
  color: #d0d4da;
  font-size: 13px;
}
</style>

<script>
// import ProductItem from '@/components/products/ProductItem.vue';

export default {
  name: 'Cart',
  data() {
    return {
      msg: 'Welcome to the Cart Page',
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    sum() {
      let sum = 0;
      this.cart.map((product) => {
        sum = product.price + sum;
        return 0;
      });
      return sum.toFixed();
    },
  },
  components: {
    'product-item': () => import('@/components/products/ProductItem'),
  },
};
</script>
