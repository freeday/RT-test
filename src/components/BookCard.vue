<template>
  <router-link
    class="card-book-link"
    :to="{ name: 'book-edit', params: { id: book.id } }"
  >
    <div class="card card-book">
      <div class="card-book-poster">
        <div class="card-book-no_poster" v-if="!book.poster">
          681&nbsp;x&nbsp;681
        </div>
        <img v-else :src="book.poster" />
      </div>
      <div class="card-book-body">
        <div class="card-book-txt card-book-name" v-text="book.title"></div>
        <div class="card-book-txt card-book-desc" v-text="book.desc"></div>
      </div>
      <div class="card-book-footer">
        <div class="card-book-txt">Raiting:</div>
        <div class="card-book-stars">
          <BaseIcon
            name="star"
            v-for="n in 5"
            :color="n <= book.raiting ? 'orange' : 'gray'"
            :key="n"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style scoped lang="scss">
.card {
  &-book {
    position: relative;
    max-width: 286px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    text-align: left;
    color: #007bff;
    font-size: 14px;
    &-link {
      width: 256px;
      margin: 0 10px 20px;
      order: 0;
      flex: 0 1 auto;
      align-self: center;
      text-decoration: none;
      &:nth-child(n + 4) {
        order: 1;
      }
    }
    &-no_poster {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: rgba(0, 0, 0, 0.5);
      font-size: 36px;
    }
    &-poster {
      position: relative;
      max-width: 286px;
      height: 270px;
      background-color: #ccc;
      overflow: hidden;
      text-align: center;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &-body {
      padding: 20px;
    }
    &-footer {
      padding: 10px 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      background-color: rgba(0, 0, 0, 0.025);
    }
    &-name {
      height: 16px;
      margin-bottom: 10px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-desc {
      height: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-stars {
      margin-top: 10px;
    }
  }
}
</style>
