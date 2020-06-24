<template>
  <div>
    <header>
      <h1 class="title">Hello World!</h1>
    </header>
    <article>
      <p>{{ paragraph }}</p>
    </article>
    <footer>
      <address>w-tokyodo</address>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        paragraph: 'This is article.'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    color: red;
  }
</style>
