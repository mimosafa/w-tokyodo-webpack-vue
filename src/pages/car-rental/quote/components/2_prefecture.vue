<template>
  <form @change="submit">
    <h2>使用場所選択</h2>
    <div>
      <select v-model="prefecture">
        <option value="tokyo-inner">東京都 (23区内)</option>
        <option value="tokyo-outer">東京都 (23区外)</option>
        <option value="chiba">千葉県</option>
        <option value="saitama">埼玉県</option>
        <option value="kanagawa">神奈川県</option>
        <option value="other">その他</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      prefecture: null
    }
  },
  methods: {
    submit() {
      this.$emit('update', this.$data);
    }
  }
};
</script>
