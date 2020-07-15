<template>
  <a :href="url"><slot /></a>
</template>

<script>
export default {
  props: {
    href: String
  },
  data() {
    return {
      url: '//www.w-tokyodo.com' + this.href
    };
  }
};
</script>
