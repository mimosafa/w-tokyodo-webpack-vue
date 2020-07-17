<template>
  <div class="button-base">
    <slot/>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss" scoped>
.button-base {
  display: inline-block;

  > * {
    display: block;
    background-color: #f2f2f2;
    border: 1px solid #d9d9d9;

    @include phone {
      padding: 10px 20px;
    }
    @include desktop {
      padding: 12px 35px;
    }
  }
}
</style>
