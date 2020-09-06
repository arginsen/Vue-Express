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
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      modelData: {},
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
      },
    };
  },
  props: ['model', 'isEditing'],
  created() {
    const manufacturer = this.model;
    this.modelData = { ...manufacturer };
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

        this.$emit('save-manufacturer', this.modelData);
        this.$message
          .loading('Action in progress..', 1)
          .then(() => this.$message.success('Loading finished', 2.5));
        return true;
      });
    },
    resetForm() {
      if (this.$route.name === 'EditManufacturers') {
        this.modelData = { ...this.model };
      } else {
        this.$refs.ruleForm.resetFields();
      }
    },
  },
};
</script>
