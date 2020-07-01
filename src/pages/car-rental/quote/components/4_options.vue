<template>
  <form @change="submit">
    <h2>オプション選択</h2>
    <div>
      <div>
        <input type="checkbox" name="options" value="generator" id="options-generator" v-model="options" />
        <label for="options-generator">発電機</label>
      </div>
      <div>
        <input type="checkbox" name="options" value="gril" id="options-grill" v-model="options" />
        <label for="options-grill">グリル</label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      options: []
    };
  },
  methods: {
    submit() {
      this.$emit('update', this.$data);
    }
  }
};
</script>
