import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBooks() {
    return apiClient.get("/books");
  },
  getBook(id) {
    return apiClient.get("/books/" + id);
  },
  postBook(book) {
    return apiClient.post("/books", book);
  },
  updateBook(book) {
    return apiClient.put("/books/" + book.id, book);
  },
  removeBook(id) {
    return apiClient.delete("/books/" + id);
  }
};
