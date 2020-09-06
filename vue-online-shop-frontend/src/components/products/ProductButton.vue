<template>
  <div>
    <a-button
      v-if="isAdding"
      @click="addToCart"
      type="primary"
      block>
      加入购物车
    </a-button>
    <a-button
      v-else
      @click="removeFromCart(id)"
      type="primary"
      block>
      从购物车移除</a-button>
  </div>
</template>

<script>
export default {
  props: ['id'], // 从 item 中获取 product 的值
  computed: {
    product() {
      const _product = this.$store.getters.allProducts.find((product) => product._id === this.id);
      return _product;
    },
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
