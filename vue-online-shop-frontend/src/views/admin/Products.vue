<template>
  <div class="table-products">
    <a-table
      :columns="columns"
      :data-source="products"
      :pagination="false"
      bordered>
      <template slot="name" slot-scope="text">
        <span class="table-name">{{ text }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-button-group>
          <a-button
            type="primary"
            size="small">
            <router-link :to="'/admin/edit/' + record._id" class="edit">
              <a-icon type="form" />
            </router-link>
          </a-button>
          <a-button
            @click="removeProduct(record._id)"
            type="danger"
            size="small">
              <a-icon type="delete" />
          </a-button>
        </a-button-group>
      </template>
    </a-table>
  </div>
</template>

<style>
.table-products {
  max-width: 500px;
  margin: 0 auto;
}

.table-name {
  color: cornflowerblue;
}
</style>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
          title: 'Manufacturer',
          dataIndex: 'manufacturer.name',
        },
        {
          title: 'Operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data: this.products,
    };
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts
        .map((value, index) => {
          const product = value;
          product.key = `'${index}'`;
          return product;
        });
    },
  },
  methods: {
    removeProduct(productId) {
      // 使用 JavaScript BOM 的 confirm 方法来询问用户是否删除此商品
      /* eslint no-alert: off */
      /* eslint no-restricted-globals: ["error", "event", "fdescribe"] */
      const res = confirm('是否删除此商品？');

      // 如果用户同意，那么就删除此商品
      if (res) {
        this.$store.dispatch('removeProduct', {
          productId,
        });
      }
    },
  },
};
</script>
