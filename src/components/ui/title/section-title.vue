<template>
  <h3 :class="color ? `color-${color}` : ''"><slot /></h3>
</template>

<script>
export default {
  props: {
    color: String
  }
};
</script>

<style lang="scss" scoped>
h3 {
  position: relative;
  text-align: center;

  @include phone {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  @include desktop {
    padding-bottom: 20px;
    margin-bottom: 35px;
  }

  &:after {
    content: "";
    background-color: #333;
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;

    @include phone {
      width: 40px;
      height: 2px;
      margin-left: -20px;
    }
    @include desktop {
      width: 60px;
      height: 2px;
      margin-left: -30px;
    }
  }

  &.color-orange:after {
    background-color: $orange;
  }
}
</style>
