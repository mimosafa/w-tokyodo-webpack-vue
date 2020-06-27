<template>
  <footer>
    <small>&copy; 2010-{{ current }} WorkStore Tokyo Do.</small>
  </footer>
</template>

<script>
export default {
  computed: {
    current() {
      return (new Date()).getFullYear();
    }
  }
};
</script>
