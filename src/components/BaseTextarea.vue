<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <textarea
      :class="[hasError ? 'error' : '']"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    hasError: Boolean,
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
textarea {
  width: 100%;
  min-height: 70px;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  border: 1px solid #ced4da;
  resize: vertical;
  border-radius: 3px;
  font-weight: 300;
  font-size: 14px;
  vertical-align: top;
  &:focus {
    border-color: #80bdff;
    outline: 0;
  }
  &:disabled {
    background-color: #e9ecef;
  }
  &.error {
    border-color: #dc3545;
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
