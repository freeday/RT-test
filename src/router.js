import Vue from "vue";
import Router from "vue-router";
import BookFormEdit from "./views/BookFormEdit.vue";
import BookList from "./views/BookList.vue";

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
      path: "/book/:id",
      name: "book-edit",
      component: BookFormEdit,
      props: true
    }
  ]
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to);
  //   // react to route changes...
  //   // don't forget to call next()
  // }
});
