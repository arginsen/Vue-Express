<template>
  <div class="product-details">
    <div class="product-details__image">
      <img :src="product.image" alt="" class="image">
    </div>
    <div class="product-details__info">
      <div class="product-details__description">
        <small>{{product.manufacturer.name}}</small>
        <h3>{{product.name}}</h3>
        <p>
          {{product.description}}
        </p>
      </div>
      <div class="product-details__price-cart">
        <p>￥{{product.price}}</p>
        <product-button :product="product"></product-button>
      </div>
    </div>
  </div>
</template>

<style>
.product-details {
  margin: 0 auto;
  width: 500px;
  padding: 30px;
  border: 1px solid #f4f4f4;
}

.product-details__image .image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  box-shadow: rgb(153, 153, 153) 2px 4px 7px;
}

.product-details__price-cart p {
  color: lightcoral;
}
</style>

<script>
import ProductButton from './ProductButton.vue';

export default {
  props: ['product'], // 父组件 item 传入 product
  components: {
    'product-button': ProductButton,
  },
};
</script>
