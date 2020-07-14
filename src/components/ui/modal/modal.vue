<template>
  <transition name="modal">
    <div v-show="isActive" class="modal-wrapper" @click="deactivate">
      <div class="modal" @click="stopEvent">
        <div class="modal-inner">
          <slot />
        </div>
        <a v-if="dismiss" class="modal-dismiss-anchor" @click="deactivate" title="Close"></a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dismiss: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activate() {
      this.isActive = true;
    },
    deactivate() {
      this.isActive = false;
    },
    stopEvent(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-enter-active {
  transition: opacity .15s;
}
.modal-leave-active {
  transition: opacity .35s
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-wrapper {
  @include overlay;

  z-index: 20001;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: auto;
  height: auto;
  overflow: visible;
  position: relative;
  box-shadow: 0 10px 25px rgba($black, .5);

  @include phone {
    max-width: 88vw;
  }
  @include desktop {
    max-width: 990px;
  }

  max-height: 88vh;

  &-inner {
    padding: 15px;
    background-color: $_color-base;
    overflow: auto;

    @include phone {
      max-height: 94vh;
    }
    @include desktop {
      max-height: 88vh;
    }
  }

  &-dismiss-anchor {
    cursor: pointer;
    position: absolute;
    top: -14px;
    right: -14px;
    width: 36px;
    height: 36px;

    &:hover {
      opacity: 1;
    }

    &:before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 30px;
      height: 30px;
      background-color: $white;
      border-radius: 15px;
      box-shadow: -2px 2px 6px rgba($black, .5);
    }
    &:after {
      content: "X";
      position: absolute;
      top: 5px;
      left: 5px;
      width: 26px;
      height: 26px;
      background-color: $black;
      color: darken($white, 17.5%);
      border-radius: 13px;
      text-align: center;
      font-size: 14px;
      line-height: 1.75;
    }
  }
}
</style>
