<template>
  <div id="pagetop">
    <a @click="toTop">PAGE TOP</a>
  </div>
</template>

<script>
const position = 200;

export default {
  mounted() {
    window.addEventListener('scroll', this.fade);
  },
  methods: {
    fade() {
      const y = window.pageYOffset;
      if (y < position) {
        $(this.$el).fadeOut();
      } else {
        $(this.$el).fadeIn();
      }
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#pagetop {
  display: none;
  position: fixed;
  z-index: 19999;

  @include phone {
    right: 10px;
    bottom: 15px;
  }
  @include desktop {
    right: 20px;
    bottom: 20px;
  }

  a {
    display: block;
    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, .8);
    background-image: url("./img/pagetop.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;

    @include kick-out-text;

    @include phone {
      background-size: 10px auto;
      width: 25px;
      height: 25px;
    }
    @include desktop {
      background-size: 15px auto;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
