<template>
  <div class="book-edit">
    <BookFormEdit :type="'edit'" :book="book"/>
  </div>
</template>

<script>
import BookFormEdit from "@/components/BookFormEdit.vue";
import BookService from "@/services/BookService.js";
export default {
  components: {
    BookFormEdit
  },
  props: ["id"],
  data() {
    return {
      book: {}
    };
  },
  created() {
    BookService.getBook(this.id)
      .then(res => {
        this.book = res.data;
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }
};
</script>