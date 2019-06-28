<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'book-list' }">Главная</router-link>
      <router-link :to="{ name: 'book-edit', params: { id: 'make' } }"
        >Добавить книгу</router-link
      >
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
#app {
  min-width: 320px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-size: 14px;
    margin: 0 20px;
    color: #007bff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #28a745;
    }
  }
}
</style>
