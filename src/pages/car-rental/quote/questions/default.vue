<template>
  <form class="quote-section" @change="submit">
    <div>
      
      <fieldset>
        <legend class="quote-section-question">レンタルを希望される車種を選んでください。</legend>
        <div>
          <div>
            <input type="radio" name="car-type" value="neo" id="car-type-neo" v-model="carType" />
            <label for="car-type-neo">軽自動車</label>
          </div>
          <div>
            <input type="radio" name="car-type" value="dogCar" id="car-type-dog-car" v-model="carType" />
            <label for="car-type-dog-car">普通自動車</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend class="quote-section-question">レンタカーを使用する地域を選んでください。</legend>
        <div>
          <div>
            <input type="radio" name="prefecture" value="tokyoInner" id="prefecture-tokyo-inner" v-model="prefecture" />
            <label for="prefecture-tokyo-inner">東京23区内</label>
          </div>
          <div>
            <input type="radio" name="prefecture" value="tokyoOuter" id="prefecture-tokyo-outer" v-model="prefecture" />
            <label for="prefecture-tokyo-outer">東京23区外</label>
          </div>
          <div>
            <input type="radio" name="prefecture" value="chiba" id="prefecture-chiba" v-model="prefecture" />
            <label for="prefecture-chiba">千葉県</label>
          </div>
          <div>
            <input type="radio" name="prefecture" value="saitama" id="prefecture-saitama" v-model="prefecture" />
            <label for="prefecture-saitama">埼玉県</label>
          </div>
          <div>
            <input type="radio" name="prefecture" value="kanagawa" id="prefecture-kanagawa" v-model="prefecture" />
            <label for="prefecture-kanagawa">神奈川県</label>
          </div>
          <div>
            <input type="radio" name="prefecture" value="other" id="prefecture-other" v-model="prefecture" />
            <label for="prefecture-other">その他地域</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend class="quote-section-question">レンタル期間を指定してください。</legend>
      </fieldset>

    </div>
  </form>
</template>

<script>
import mixin from './mixin';

export default {
  mixins: [mixin],
  data() {
    return {
      carType: null,
      prefecture: null
    };
  },
  methods: {
    submit() {
      this.store.setCarType(this.carType);
      this.store.setPrefecture(this.prefecture);
    }
  }
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
<style lang="scss" scoped>

</style>
