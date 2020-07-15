<template>
  <div class="page-title">
    <h2>
      <span><slot /></span>
      <span v-if="subtitle">{{ subtitle }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  display: table;
  width: 100%;
  position: relative;

  @include phone {
    height: 90px;
    margin-bottom: 25px;
  }
  @include desktop {
    height: 220px;
    margin-bottom: 50px;
  }

  h2 {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    position: relative;
    background-color: rgba($black, .5);
    color: $white;
    letter-spacing: .1em;
    z-index: 2;

    > span {
      display: block;

      &:nth-of-type(1) {
        font-weight: 500;

        @include phone {
          margin: 0 0 3px;
        }
        @include desktop {
          margin: -10px 0 10px;
        }
      }

      &:nth-of-type(2) {
        font-weight: normal;

        @include phone {
          font-size: 1rem;
        }
        @include desktop {
          font-size: 1.7rem;
        }
      }
    }
  }
}
</style>
