import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import BookFormEdit from "./views/BookFormEdit.vue";
import BookList from "./views/BookList.vue";
import NotFound from "./views/NotFound.vue";
import NetworkIssue from "./views/NetworkIssue.vue";

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
      component: BookList,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch("fetchBooks")
          .then(books => {
            routeTo.params.books = books;
            next();
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: "404", params: { resource: "event" } });
            } else {
              next({ name: "network-issue" });
            }
          });
      }
    },
    {
      path: "/book/make",
      name: "book-make",
      component: BookFormEdit
    },
    {
      path: "/book/:id",
      name: "book-edit",
      component: BookFormEdit,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch("fetchBook", routeTo.params.id)
          .then(book => {
            routeTo.params.book = book;
            next();
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: "404", params: { resource: "event" } });
            } else {
              next({ name: "network-issue" });
            }
          });
      }
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      props: true
    },
    {
      path: "*",
      redirect: { name: "404" }
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: NetworkIssue
    }
  ]
});
