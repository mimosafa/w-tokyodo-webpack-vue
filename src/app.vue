<template>
  <div>
    <header>
      <h1 class="title">Hello World!</h1>
    </header>
    <article>
      <router-view></router-view>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
      </ul>
    </article>
    <footer>
      <address>w-tokyodo</address>
    </footer>
  </div>
</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  .title {
    @include text-red
  }
</style>
