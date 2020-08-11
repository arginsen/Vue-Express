<template>
  <div class="product">
    <div class="box-content">
      <router-link :to="'/detail/' + product._id" class="product-link">
        <img :src="product.image" alt="" class="product__image">
      </router-link>
        <p class="product__name">产品名称：{{product.name}}</p>
        <p class="product__description">介绍：{{product.description}}</p>
        <p class="product__price">价格：
          <span class="promote">￥{{product.price}}</span>
          <span class="origin">￥{{origin}}</span>
        </p>
        <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<style>
.product {
  border-top: 1px solid #f4f4f4;
  padding: 30px;
}

.box-content {
  width: 450px;
  margin: 0 auto;
  padding: 30px;
  line-height: 1.1rem;
  box-shadow: rgb(153, 153, 153) 2px 4px 7px;
  border-radius: 6px;
}

.product__image {
  width: 80%;
  height: auto;
  box-shadow: rgba(0, 0, 0, .2) 2px 4px 7px;
}

.product__price .promote {
  color: lightcoral;
  padding-right: 0.3rem;
  font-size: 1.4em;
}

.product__price .origin {
  vertical-align: text-bottom;
  text-decoration: line-through;
}
</style>

<script>
import ProductButton from './ProductButton.vue';

export default {
  name: 'product-item',
  props: ['product'], // list 传入 product
  computed: {
    origin() {
      return (this.product.price * 1.2).toFixed();
    },
  },
  components: {
    'product-button': ProductButton,
  },
};
</script>
