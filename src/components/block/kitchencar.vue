<template>
  <div>

    <a class="kitchencar-block" @click="detail">
      <h4 class="kitchencar-block-title">
        <link-arrow color="orange">{{ name }}</link-arrow>
      </h4>
      <div class="kitchencar-block-contents">
        <div class="kitchencar-block-images">
          <span class="car-image" :class="carPhoto ? '' : 'noimg'">
            <img v-if="carPhoto" :src="carPhoto" :alt="name">
          </span>
          <span class="menu-image" :class="menuPhoto ? '' : 'noimg'">
            <img v-if="menuPhoto" :src="menuPhoto" :alt="menuText">
          </span>
        </div>
        <div class="kitchencar-block-texts">
          <div>
            <p>【メニュー：{{ menuText }}】{{ description }}</p>
          </div>
        </div>
      </div>
    </a>

    <modal ref="modal" :dismiss="true">
      <div class="kitchencar-detail">
        <h4>{{ name }}</h4>
          <div class="kitchencar-detail-images">
            <div class="kitchencar-detail-image">
              <span
                :class="modalImageClass(carPhoto)"
                :style="carPhoto ? `backgroundImage: url(${carPhoto})` : ''"
              ></span>
            </div>
            <div class="kitchencar-detail-image">
              <span
                :class="modalImageClass(menuPhoto)"
                :style="carPhoto ? `backgroundImage: url(${menuPhoto})` : ''"
              ></span>
            </div>
          </div>
        <p>【メニュー：{{ menuText }}】{{ description }}</p>
      </div>
    </modal>

  </div>
</template>

<script>
import LinkArrow from '@ui/link/link-arrow.vue';
import Modal from '@ui/modal/modal.vue';

import resizeImg from '@js/resize-img';
import onWindowResize from '@js/onresize';

export default {
  components: {
    LinkArrow,
    Modal
  },
  props: {
    id: Number,
    name: String,
    carPhoto: {
      type: String,
      required: false
    },
    menuPhoto: {
      type: String,
      required: false
    },
    menuText: String,
    description: String
  },
  data() {
    return {
      images: null
    }
  },
  mounted() {
    this.images = this.$el.querySelectorAll('.kitchencar-block-images > span');
    this.resizeImages();
    onWindowResize(this.resizeImages);
  },
  methods: {
    resizeImages() {
      for (const image of this.images) {
        resizeImg(image);
      }
    },
    detail(e) {
      e.preventDefault();
      this.$refs.modal.activate();

      const images = this.$el.querySelectorAll('.kitchencar-detail-image span');
      for (const image of images) {
        resizeImg(image);
      }
    },
    modalImageClass(uri) {
      if (uri) {
        return 'has-image';
      }
      return 'noimg';
    }
  }
};
</script>

<style lang="scss" scoped src="./_kitchencar.scss"></style>
