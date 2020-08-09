<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">加入购物车</button>
    <button v-else class="button" @click="removeFromCart(product._id)">从购物车移除</button>
  </div>
</template>

<style scoped>
.button {
  width: 100%;
  height: 30px;
  box-shadow: rgba(0, 0, 0, .1) 2px 4px 7px;
}
</style>

<script>
export default {
  props: ['product'], // 从 item 中获取 product 的值
  computed: {
    isAdding() {
      /* eslint no-underscore-dangle: 0 */
      let isAdding = true;
      this.cart.map((product) => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
        return 0;
      });

      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', {
        product: this.product,
      });
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', {
        productId,
      });
    },
  },
};
</script>
