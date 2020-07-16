<template>
  <span :class="imgClass" :style="imgStyle"></span>
</template>

<script>
export default {
  props: {
    src: String
  },
  computed: {
    imgStyle() {
      return this.src ? `background-image: url(${this.src});` : '';
    },
    imgClass() {
      return this.src ? 'hasimg' : 'noimg';
    }
  }
};
</script>

<style lang="scss" scoped>
.hasimg {
  display: inline-block;
  background: {
    repeat: no-repeat;
    size: cover;
    position: 50% 50%;
  }
}
</style>
