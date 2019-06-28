import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import BookService from "@/services/BookService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: {}
  },
  mutations: {
    ADD_BOOK(state, book) {
      state.books.push(book);
    },
    SET_BOOK(state, book) {
      state.book = book;
    },
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_CURRENT_ACTION(state, action) {
      state.action = action;
    }
  },
  actions: {
    makeBlankBook({ commit }) {
      commit("SET_BOOK", {
        id: Math.floor(Math.random() * 10000000),
        title: null,
        poster: null,
        desc: null,
        author: null,
        publisher: null,
        ISBN: null,
        year: null,
        pages: null,
        raiting: 0,
        review: null,
        note: null
      });
    },
    makeBook({ commit }, book) {
      return BookService.postBook(book)
        .then(() => {
          commit("ADD_BOOK", book);
        })
        .catch(error => {
          router.push("/");
        });
    },
    fetchBooks({ commit }) {
      return BookService.getBooks().then(res => {
        commit("SET_BOOKS", res.data);
        return res.data;
      });
    },
    fetchBook({ commit, getters }, id) {
      let book = getters.getBookById(id);
      if (book) {
        commit("SET_BOOK", book);
        return book;
      } else {
        return BookService.getBook(id).then(res => {
          commit("SET_BOOK", res.data);
          return res.data;
        });
      }
    },
    updateBook({}, book) {
      return BookService.updateBook(book)
        .then(res => {})
        .catch(error => {
          router.push("/");
        });
    },
    removeBook({}, book) {
      return BookService.removeBook(book.id)
        .then(res => {})
        .catch(error => {
          router.push("/");
        });
    }
  },
  getters: {
    getBookById: state => id => {
      return state.books.find(book => book.id === id);
    },
    getCurrentBook: state => {
      return state.book;
    },
    getBooks: state => id => {
      return state.books.filter(book => book.id !== id);
    }
  }
});
