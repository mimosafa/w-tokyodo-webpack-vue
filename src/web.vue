<template>
  <wrapper>
    <router-view/>
  </wrapper>
</template>

<script>
import Wrapper from './layouts/wrapper.vue';

export default {
  components: {
    Wrapper
  }
};
</script>
