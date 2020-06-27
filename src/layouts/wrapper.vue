<template>
  <div id="wrapper">
    <global-header />
    <div id="contents">
      <slot />
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from '../components/global/header/header.vue';
import GlobalFooter from '../components/global/footer/footer.vue';

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  #contents {
    flex: 1;
  }
}
</style>
