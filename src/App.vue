<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'book-list' }">Главная</router-link>
      <router-link :to="{ name: 'book-make' }">Добавить книгу</router-link>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("makeBlankBook");
  },
  computed: mapState(["book"])
};
</script>

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
