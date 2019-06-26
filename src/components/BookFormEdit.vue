<template>
  <div class="form-wrapper">
    <div>{{ book.id }}</div>
    <div class="form-action">
      <button>Редактировать книгу</button>
      <button>Удалить книгу</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "book"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
