<template>
  <div class="book-list">
    <BookCard v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import BookService from "@/services/BookService.js";
export default {
  components: {
    BookCard
  },
  data() {
    return {
      books: []
    };
  },
  created() {
    BookService.getBooks()
      .then(res => {
        this.books = res.data;
      })
      .catch(error => {
        console.log("error:" + error);
      });
  }
};
</script>
<style scoped lang="scss">
.book-list {
  display: flex;
  max-width: 828px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; // Важная опция, применить для медиа запросов чтобы покрасивее было при перестроении карточек, чтобы они центровались а не прижимались к левому краю
  align-content: center;
  align-items: center;
}
</style>