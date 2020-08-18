<template>
  <div class="table-manufacturers">
    <a-table
      class=""
      :columns="columns"
      :data-source="manufacturers"
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
            <router-link :to="'/admin/manufacturers/edit/' + record._id" class="edit">
              <a-icon type="form" />
            </router-link>
          </a-button>
          <a-button
            @click="removeManufacturer(record._id)"
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
.table-manufacturers {
  max-width: 300px;
  margin: 0 auto;
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
          title: 'Operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data: this.manufacturers,
    };
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
        .map((value, index) => {
          const manufacturer = value;
          manufacturer.key = `'${index}'`;
          return manufacturer;
        });
    },
  },
  methods: {
    removeManufacturer(manufacturerId) {
      // 使用 JavaScript BOM 的 confirm 方法来询问用户是否删除此制造商
      /* eslint no-alert: off */
      /* eslint no-restricted-globals: ["error", "event", "fdescribe"] */
      const res = confirm('是否删除此制造商？');

      // 如果用户同意，那么就删除此制造商
      if (res) {
        this.$store.dispatch('removeManufacturer', {
          manufacturerId,
        });
      }
    },
  },
};
</script>
