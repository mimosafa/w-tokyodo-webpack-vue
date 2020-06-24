<template>
  <div>
    <AppHeader></AppHeader>
    <article>
      <router-view></router-view>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
      </ul>
    </article>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from './components/app-header/app-header.vue';
  import AppFooter from './components/app-footer/app-footer.vue';

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
