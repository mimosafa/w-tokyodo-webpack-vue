<template>
  <form @change="submit">
    <h2>車両選択</h2>
    <div>
      <div>
        <input type="radio" name="car-type" value="neo" id="car-type-neo" v-model="carType" />
        <label for="car-type-neo">軽自動車</label>
      </div>
      <div>
        <input type="radio" name="car-type" value="dog-car" id="car-type-dog-car" v-model="carType" />
        <label for="car-type-dog-car">普通自動車</label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      carType: null
    };
  },
  methods: {
    submit() {
      this.$emit('update', this.$data);
    }
  }
};
</script>
