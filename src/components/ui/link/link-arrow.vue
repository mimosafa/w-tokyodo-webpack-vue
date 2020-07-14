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
    padding-left: 20px;
  }
  @include desktop {
    padding-left: 30px;
  }

  &:before {
    content: "";
    background: {
      repeat: no-repeat;
      position: 50% 50%;
    }
    display: block;
    position: absolute;
    top: .3em;
    left: 0;
    background-image: url("./img/icon_arrow.png");
    background-color: #333;

    @include phone {
      background-size: 13px auto;
      width: 13px;
      height: 13px;
      border-radius: 13px;
    }
    @include desktop {
      background-size: 18px auto;
      width: 18px;
      height: 18px;
      border-radius: 18px;
    }
  }

  &.color-orange:before {
    background-color: $orange;
  }
}
</style>
