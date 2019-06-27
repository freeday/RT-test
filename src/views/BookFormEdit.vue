<template>
  <div class="form-wrapper">
    <div class="form-action">
      <form @submit.prevent @keyup.enter="whatAction('enter')">
        <BaseButton
          :buttonClass="event == 'edit' ? 'btn-simple' : 'btn-cucumber'"
          @click="whatAction(event)"
        >{{ actions[event] }}</BaseButton>
        <BaseButton
          :buttonClass="'btn-tomato'"
          @click="whatAction('remove')"
          v-if="event !== 'make'"
        >Удалить книгу</BaseButton>
        <div v-for="(field, index) in fields" :key="index" class="form-field-input">
          <BaseInput
            v-if="field.type == 'input'"
            :label="field.label"
            name="field.name"
            v-model="book[field.name]"
            :placeholder="field.label"
            :disabled="event =='edit' ? true : false"
          />
          <div v-else-if="field.type == 'star'" class="form-field-stars">
            <label for>{{ field.label }}</label>
            <BaseIcon
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
              v-if="field.type == 'textarea'"
              :label="field.label"
              name="field.name"
              v-model="book[field.name]"
              :placeholder="field.label"
              :disabled="event =='edit' ? true : false"
            />
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
      event: "",
      raiting: 0,
      actions: {
        edit: "Редактировать книгу",
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
    if (this.id === "make") {
      this.event = this.id;
      this.$store.dispatch("makeBlankBook");
    } else {
      this.event = "edit";
      this.$store.dispatch("fetchBook", this.id).then(() => {
        this.raiting = this.book.raiting;
      });
    }
  },
  computed: mapState(["book"]),
  methods: {
    mouseLeaveStars() {
      if (this.event == "edit") return;
      this.raiting = this.book.raiting;
    },
    mouseOverStars(idx) {
      if (this.event == "edit") return;
      this.raiting = idx;
    },
    setRaiting() {
      this.book.raiting = this.raiting;
    },
    whatAction(event) {
      if (event === "edit") {
        this.editBook();
        return;
      }
      if (event === "remove") {
        this.$router.replace({ path: `/book/${this.book.id}` });
      }
      this.$store.dispatch(`${event}Book`, this.book).then(() => {
        if (event === "make") {
          this.$router.push({
            name: "book-edit",
            params: { id: this.book.id }
          });
        }
        if (event === "remove") return this.$router.push("/");
        if (event === "update" || event === "enter") this.event = "edit";
      });
    },
    editBook() {
      this.event = "update";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-action {
  max-width: 600px;
  min-width: 320px;
  margin: 0 auto;
  .btn {
    margin: 0 10px;
  }
  .icon-wrapper {
    cursor: pointer;
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
.form-field-input,
.form-field-textarea {
  margin-top: 20px;
  font-size: 14px;
}
</style>
