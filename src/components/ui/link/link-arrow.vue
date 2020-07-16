<template>
  <span :class="color ? `color-${color}` : ''">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    color: String
  }
};
</script>

<style lang="scss" scoped>
span {
  font-weight: 600;
  display: inline-block;
  position: relative;

  @include phone {
    padding-left: 2rem;
  }
  @include desktop {
    padding-left: 3rem;
  }

  &:before {
    content: "";
    background: {
      repeat: no-repeat;
      position: 50% 50%;
    }
    display: block;
    position: absolute;
    top: .6rem;
    left: 0;
    background-image: url("./img/icon_arrow.png");
    background-color: #333;

    @include phone {
      background-size: 1.3rem auto;
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 1.3rem;
    }
    @include desktop {
      background-size: 1.8rem auto;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 1.8rem;
    }
  }

  &.color-orange:before {
    background-color: $orange;
  }
}
</style>
