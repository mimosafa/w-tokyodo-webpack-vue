<template>
  <ul class="kitchencars">
    <li v-for="kitchencar in kitchencars" class="kitchencar" :id="`kitchencar-${kitchencar.car_idno}`">
      <kitchencar-block
        :id="kitchencar.car_idno"
        :name="kitchencar.car_name"
        :car-photo="kitchencar.car_photo"
        :menu-photo="kitchencar.menu_photo"
        :menu-text="kitchencar.menu_text"
        :description="kitchencar.description"
      ></kitchencar-block>
    </li>
  </ul>
</template>

<script>
import KitchencarBlock from './kitchencar.vue';

export default {
  props: {
    kitchencars: Array
  },
  components: {
    KitchencarBlock
  }
};
</script>

<style lang="scss" scoped>
.kitchencars {
  @include desktop {
    width: 1000px;
    margin: 0 auto;

    @include grid($flex-wrap: wrap);
  }

  .kitchencar {
    @include phone {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #d9d9d9;

      &:first-child {
        padding-top: 0;
        margin-top: 0;
        border-top: none;
      }
    }
    @include desktop {
      @include grid-col($col: 1, $grid-columns: 2, $gutter: 60px) {
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
