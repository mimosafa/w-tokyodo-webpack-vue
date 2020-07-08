<template>
  <div id="wrapper">
    <global-header
      @init-header="initOverlay"
      @toggle-header-collapse="toggleOverlay"
      ref="globalHeader"
    />

    <div class="header_overlay" @click="closeHeaderCollapse"></div>

    <div id="loader"></div>

    <div id="contents">
      <slot></slot>
    </div>

    <global-footer />

    <global-page-top />
  </div>
</template>

<script>
import GlobalHeader from '../components/global/header/header.vue';
import GlobalFooter from '../components/global/footer/footer.vue';
import GlobalPageTop from '../components/global/pagetop/pagetop.vue';

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalPageTop
  },
  data() {
    return {
      overlay: null
    };
  },
  created() {
    window.addEventListener('load', () => {
      $('#loader').fadeOut(350);
    });
  },
  mounted() {
    this.overlay = document.querySelector('#wrapper > .header_overlay');
  },
  methods: {
    initOverlay() {
      if (this.overlay) {
        this.overlay.style.display = 'none';
      }
    },
    toggleOverlay(speed) {
      $(this.overlay).fadeToggle(speed);
    },
    closeHeaderCollapse() {
      this.$refs.globalHeader.handleCollapse();
    }
  }
};
</script>

<style lang="scss" scoped>
#contents {
  @include global-container;

  > * {
    @include phone {
      //padding: 48px 15px 55px;
      padding-top: 48px;
    }
    @include desktop {
      //padding: 90px 40px 110px;
      padding-top: 90px;
    }
  }
}

#wrapper {
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  #contents {
    flex: 1;
  }
}

.header_overlay {
  display: none;
  background-color: rgba($black, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 19997;
}

#loader {
  background: {
    color: $_color-base;
    image: url("./img/loader.gif");
    repeat: no-repeat;
    position: 50% 50%;
  }
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
</style>
