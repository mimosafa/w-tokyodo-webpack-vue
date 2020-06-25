<template>
  <web-frame>
    <router-view></router-view>
  </web-frame>
</template>

<script>
import WebFrame from './layouts/web-frame.vue';

export default {
  components: {
    WebFrame
  }
};
</script>
