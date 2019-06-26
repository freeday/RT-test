import Vue from "vue";
import Router from "vue-router";
import BookMake from "./views/BookMake.vue";
import BookList from "./views/BookList.vue";
import BookShow from "./views/BookShow.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/book/list"
    },
    {
      path: "/book/list",
      name: "book-list",
      component: BookList
    },
    {
      path: "/book/make",
      name: "book-make",
      component: BookMake
    },
    {
      path: "/book/:id",
      name: "book-show",
      component: BookShow,
      props: true
    }
  ]
});
