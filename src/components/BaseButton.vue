<template>
  <button v-on="$listeners" v-bind="$attrs" class="btn" :class="buttonClass">
    <slot/>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  padding: 8px 12px;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  outline: 0;
  cursor: pointer;
  &-simple {
    background-color: #007bff;
    border-color: #007bff;
  }
  &-tomato {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  &-cucumber {
    background-color: #28a745;
    border-color: #28a745;
  }
}
</style>
