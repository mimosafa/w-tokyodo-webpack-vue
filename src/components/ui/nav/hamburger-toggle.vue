<template>
  <div class="hamburger_toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      this.$el.classList.remove('active');
    },
    toggle() {
      this.$el.classList.toggle('active');
      this.$emit('toggle');
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger_toggle {
  display: inline-block;
  position: relative;
  cursor: pointer;

  @include phone {
    width: 20px;
    height: 16px;
  }
  @include desktop {
    width: 35px;
    height: 25px;
  }

  span {
    background-color: $black;
    display: inline-block;
    position: absolute;
    transition: .15s ease-in-out;
    right: 0;

    @include phone {
      width: 20px;
      height: 2px;
    }
    @include desktop {
      width: 35px;
      height: 3px;
    }

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      @include phone {
        top: 7px;
      }
      @include desktop {
        top: 11px;
      }
    }

    &:nth-child(3) {
      @include phone {
        top: 14px;
      }
      @include desktop {
        top: 22px;
      }
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
        @include phone {
          top: 8px;
        }
        @include desktop {
          top: 13px;
        }
      }

      &:nth-child(2) {
        width: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        @include phone {
          top: 8px;
        }
        @include desktop {
          top: 13px;
        }
      }
    }
  }
}
</style>
