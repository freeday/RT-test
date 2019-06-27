<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style scoped lang="scss">
input {
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  font-weight: 300;
  font-size: 14px;
  &:focus {
    border-color: #80bdff;
    outline: 0;
  }
  &:disabled {
    background-color: #e9ecef;
  }
}
label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
</style>
