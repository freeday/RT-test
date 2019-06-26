   <template>
  <div class="icon-wrapper">
    <svg :class="['icon icon-' + color ]" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}"></use>
    </svg>
  </div>
</template>
    
    <script>
export default {
  name: "Icon",
  props: {
    name: String,
    color: {
      type: String,
      default: "gray"
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
};
</script>
    
<style scoped lang="scss">
.icon {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: currentColor;
  margin-right: 6px;
  &-wrapper {
    display: inline-flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    font-weight: 600;
  }
  &-orange {
    fill: rgb(254, 213, 48);
  }
}
</style>