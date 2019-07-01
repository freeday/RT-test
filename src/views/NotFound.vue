<template>
  <div class="not-found">
    <h1>Ой, что-то пошло не так</h1>
    <h3>Страницу которую вы ищите, здесь нет</h3>
    <router-link :to="{ name: 'book-list' }">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss"></style>
