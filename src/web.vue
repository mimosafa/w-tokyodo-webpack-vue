<template>
  <WebFrame>
    <router-view></router-view>
  </WebFrame>
</template>

<script>
import WebFrame from './layouts/web-frame.vue';

export default {
  components: {
    WebFrame
  }
};
</script>
