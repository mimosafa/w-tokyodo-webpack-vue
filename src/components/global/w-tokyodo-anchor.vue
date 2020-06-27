<template>
  <a v-bind:href="url"><slot /></a>
</template>

<script>
export default {
  props: ['href'],
  data() {
    return {
      url: '//www.w-tokyodo.com' + this.href
    };
  }
};
</script>
