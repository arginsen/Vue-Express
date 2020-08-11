<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <template v-for="product in cart">
      <product-item :product="product" :key="product._id"></product-item>
    </template>
    <h3 v-if="sum > 0" class="cart-sum">
      合计: <span>￥{{ sum }}</span>
      <button class="settlement">结算</button>
    </h3>
  </div>
</template>

<style>
.cart-sum {
  width: 450px;
  text-align: right;
  margin: 0 auto;
  padding: 20px 0;
}

.cart-sum span {
  color: lightcoral;
}

.cart-sum .settlement {
  margin-left: 20px;
  width: 80px;
  height: 1.8rem;
  font-size: 1em;
  background: lightcoral;
  color: rgb(242, 246, 250);
  border: 0;
  border-radius: 40px;
}

.cart-sum .settlement:focus {
  outline: 0;
  background-color: rgb(240, 104, 104);
}
</style>

<script>
import ProductItem from '@/components/products/ProductItem.vue';

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
    'product-item': ProductItem,
  },
};
</script>
