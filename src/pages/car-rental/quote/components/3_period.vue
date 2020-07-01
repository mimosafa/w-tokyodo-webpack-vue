<template>
  <form @change="submit">
    <h2>レンタル期間</h2>
    <div>
      <div>
        <label for="period-date-start">開始日時</label>
        <input type="datetime-local" id="period-date-start" v-model="dateStart" />
      </div>
      <div>
        <label for="period-date-end">終了日時</label>
        <input type="datetime-local" id="period-date-end" v-model="dateEnd" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dateStart: null,
      dateEnd: null
    };
  },
  methods: {
    submit() {
      this.$emit('update', this.$data);
    }
  }
};
</script>
