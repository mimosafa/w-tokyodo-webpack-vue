<template>
  <form class="quote-section" @change="submit">
    <div>

      <fieldset>
        <legend class="quote-section-question">レンタルを希望される車種を選んでください。</legend>
        <div>
          <div v-for="(type, key) in store.carTypes">
            <input type="radio" :value="key" :id="`car-type-${key}`" v-model="carType">
            <label :for="`car-type-${key}`">{{ type.label }}</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend class="quote-section-question">レンタカーを使用する地域を選んでください。</legend>
        <div>
          <div v-for="(pref, key) in store.prefectures">
            <input type="radio" :value="key" :id="`prefecture-${key}`" v-model="prefecture" />
            <label :for="`prefecture-${key}`">{{ pref.label }}</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend class="quote-section-question">レンタル期間を指定してください。</legend>
        <div>
          <div>
            <label for="period-start">レンタル開始日</label>
            <input type="date" id="period-start" :min="today" v-model="periodStart">
          </div>
          <div v-if="periodStart">
            <label for="period-end">レンタル終了日</label>
            <input type="date" id="period-end" :min="minPeriodEnd" v-model="periodEnd">
          </div>
        </div>
      </fieldset>

    </div>
  </form>
</template>

<script>
import mixin from './mixin';

const formatDate = (date) => {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};

export default {
  mixins: [mixin],
  data() {
    return {
      carType: null,
      prefecture: null,
      periodStart: null,
      periodEnd: null
    };
  },
  computed: {
    today() {
      return formatDate(new Date());
    },
    minPeriodEnd() {
      const date = new Date(this.periodStart);
      date.setDate(date.getDate() + 1);
      return formatDate(date);
    }
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
