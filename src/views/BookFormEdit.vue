<template>
  <div class="form-wrapper">
    <div class="form-action">
      <form @submit.prevent @key.enter="whatAction('enter')">
        <BaseButton
          :buttonClass="state === 'default' ? 'btn-simple' : 'btn-cucumber'"
          @click="whatAction(state)"
          v-text="actions[state]"
        ></BaseButton>
        <BaseButton
          :buttonClass="'btn-tomato'"
          @click="whatAction('remove')"
          v-if="state !== 'make'"
          v-text="'Удалить книгу'"
        ></BaseButton>
        <div
          v-for="(field, index) in fields"
          :key="index"
          class="form-field-control"
        >
          <div v-if="field.type === 'input'" class="form-field-input">
            <BaseInput
              :label="field.label"
              :name="field.name"
              v-model="book[field.name]"
              :placeholder="field.label"
              :disabled="state === 'default' ? true : false"
              :hasError="!!errors[field.name]"
            />
            <div
              class="error-message"
              v-text="errors[field.name]"
              v-show="!!errors[field.name]"
            ></div>
          </div>
          <div v-else-if="field.type === 'star'" class="form-field-stars">
            <label v-text="field.label"></label>
            <BaseIcon
              :cursor="state !== 'default' ? 'pointer' : state"
              name="star"
              v-for="n in 5"
              :color="n <= raiting ? 'orange' : 'gray'"
              :key="n"
              @click="setRaiting"
              @mouseover="mouseOverStars(n)"
              @mouseleave="mouseLeaveStars"
              v-model="raiting"
            />
          </div>
          <div v-else-if="field.type == 'textarea'" class="form-field-textarea">
            <BaseTextarea
              v-if="field.type === 'textarea'"
              :label="field.label"
              name="field.name"
              v-model="book[field.name]"
              :placeholder="field.label"
              @keyup.enter.prevent
              :disabled="state === 'default' ? true : false"
              :hasError="!!errors[field.name]"
            />
            <div
              class="error-message"
              v-text="errors[field.name]"
              v-show="!!errors[field.name]"
            ></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import { mapState } from "vuex";

export default {
  props: ["id"],
  components: {
    BaseButton,
    BaseInput,
    BaseTextarea
  },
  data() {
    return {
      state: "default",
      raiting: 0,
      errors: {
        title: null,
        desc: null,
        ISBN: null
      },
      actions: {
        default: "Редактировать книгу",
        update: "Сохранить книгу",
        make: "Добавить книгу",
        remove: "Удалить книгу"
      },
      fields: [
        { name: "title", label: "Название", type: "input" },
        { name: "poster", label: "Обложка", type: "input" },
        { name: "desc", label: "Описание", type: "textarea" },
        { name: "author", label: "Автор", type: "input" },
        { name: "publisher", label: "Издательство", type: "input" },
        { name: "ISBN", label: "Код ISBN", type: "input" },
        { name: "year", label: "Год издания", type: "input" },
        { name: "pages", label: "Количество страниц", type: "input" },
        { name: "raiting", label: "Рейтинг", type: "star" },
        {
          name: "review",
          label: "Отзывы тех, кто прочитал",
          type: "textarea"
        },
        { name: "note", label: "Личные заметки по книге", type: "textarea" }
      ]
    };
  },
  created() {
    if (this.id) {
      this.state = "default";
      this.$store.dispatch("fetchBook", this.id).then(() => {
        this.raiting = this.book.raiting;
      });
    } else {
      this.state = "make";
      this.$store.dispatch("makeBlankBook");
    }
  },
  computed: mapState(["book"]),
  methods: {
    mouseLeaveStars() {
      if (this.state == "default") return;
      this.raiting = this.book.raiting;
    },
    mouseOverStars(idx) {
      if (this.state == "default") return;
      this.raiting = idx;
    },
    setRaiting() {
      this.book.raiting = this.raiting;
    },
    whatAction(state) {
      if (this.state === "default" && state === "enter") return;
      if ((state === "enter" && this.state === "make") || state === "make")
        return this.simpleValidate(this.addBook);
      if ((state === "enter" && this.state === "update") || state === "update")
        return this.simpleValidate(this.updateBook);
      if (state === "default") {
        this.state = "update";
        return;
      }
      if (state === "remove") {
        if (confirm("Хотите удалить эту книгу?")) {
          this.removeBook();
        } else {
          return;
        }
      }
    },
    simpleValidate(cb) {
      let hasError = false;
      let fields = ["title", "desc", "ISBN"];

      for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        if (this.book[field]) {
          this.errors[field] = "";
        } else {
          hasError = true;
        }
      }

      if (!this.book.title) this.errors.title = "У книги должно быть название";
      if (!this.book.desc) this.errors.desc = "У книги должно быть описание";
      if (!this.book.ISBN)
        this.errors.ISBN = "У книги должнен быть паспорт издания - ISBN";

      if (!hasError && typeof cb === "function") return cb();
    },
    updateBook() {
      this.$store.dispatch("updateBook", this.book).then(() => {
        this.state = "default";
      });
    },
    addBook() {
      this.$store.dispatch("makeBook", this.book).then(() => {
        this.$router.push({
          name: "book-edit",
          params: { id: this.book.id }
        });
      });
    },
    removeBook() {
      this.$router.replace({ path: `/book/${this.book.id}` });
      this.$store.dispatch("removeBook", this.book).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.form-action {
  max-width: 600px;
  min-width: 320px;
  margin: 0 auto;
  .btn {
    margin: 0 8px;
  }
}
label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
.form-field-stars {
  text-align: left;
}
.form-field-control {
  margin-top: 20px;
}
.form-field-input,
.form-field-textarea {
  font-size: 14px;
}
.error-message {
  margin-top: 5px;
  text-align: left;
  font-size: 12px;
  color: #dc3545;
}
</style>
