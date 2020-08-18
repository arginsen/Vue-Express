<template>
  <a-form-model
    ref="ruleForm"
    :model="modelData"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol">
    <a-form-model-item
      label="Name"
      prop="name">
      <a-input
        v-model="modelData.name"
        placeholder="please input product name" />
    </a-form-model-item>

    <a-form-model-item
      label="Price"
      prop="price">
      <a-input
        v-model="modelData.price"
        placeholder="please input product price" />
    </a-form-model-item>

    <a-form-model-item
      label="Manufacturer"
      prop="manufacturer">
      <a-select
        v-model="modelData.manufacturer.name"
        placeholder="please select manufacturer">
        <template v-for="manufacturer in manufacturers">
          <a-select-option
            :key="manufacturer._id"
            :value="manufacturer._id">
              {{manufacturer.name}}
          </a-select-option>
        </template>
      </a-select>
    </a-form-model-item>

    <a-form-model-item
      label="Image"
      prop="image">
      <a-input
        v-model="modelData.image"
        placeholder="please input image url" />
    </a-form-model-item>

    <a-form-model-item
      label="Description"
      prop="description">
      <a-input
        v-model="modelData.description"
        placeholder="please input product description"
        type="textarea" />
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 10, offset: 7 }">
      <a-button v-if="isEditing" type="primary" @click="onSubmit">
        Update
      </a-button>
      <a-button v-else type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-model-item>
    <!-- {{this.modelData}}<br>
    {{this.model}} -->
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: '' } },
      labelCol: { span: 4, offset: 4 },
      wrapperCol: { span: 10 },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input validate name',
            trigger: 'blur',
          },
          {
            min: 2,
            max: 15,
            trigger: 'blur',
            message: 'Length should be 2 to 15',
          },
        ],
        price: [
          {
            required: true,
            pattern: /^[0-9]*$/,
            whitespace: true,
            message: 'Please input validate price',
            trigger: 'blur',
          },
        ],
        manufacturer: [
          {
            required: true,
            message: 'Please select manufacturer',
            trigger: 'change',
          },
        ],
        image: [
          {
            type: 'string',
            required: true,
            pattern: /(http|https):\/\/([\w.]+\/?)\S*/,
            message: 'Please input validate url',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: true,
            message: 'Please input validate description',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  props: ['model', 'manufacturers', 'isEditing'],
  created() {
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  watch: {
    model(val) {
      this.modelData = val;
    },
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false;
        }

        // const manufacturer = this.manufacturers.find(
        //   (item) => item.name === this.modelData.manufacturer.name,
        // );
        // this.modelData.manufacturer = manufacturer;

        this.$emit('save-product', this.modelData);
        this.$message
          .loading('Action in progress..', 1)
          .then(() => this.$message.success('Loading finished', 2.5));
        return true;
      });
    },
    resetForm() {
      if (this.$route.name === 'Edit') {
        const product = this.$store.getters.productById(this.$route.params.id);
        this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
      } else {
        this.$refs.ruleForm.resetFields();
      }
      this.$message
        .success('Reset finished', 2);
    },
  },
};
</script>
