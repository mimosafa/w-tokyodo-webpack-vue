<template>
  <div id="quote-app">

    <div class="quote-lead">
      <div>
        <h1>レンタカーお見積り</h1>
        <dl class="quote-result">
          <dt>車種</dt>
          <dd class="quote-result-label">{{ carTypeLabel }}</dd>
          <dd class="quote-result-price">{{ carTypePrice }}</dd>
          <dt>地域</dt>
          <dd class="quote-result-label">{{ prefectureLabel }}</dd>
          <dd class="quote-result-price"></dd>
          <dt>期間</dt>
          <dd class="quote-result-label"></dd>
          <dd class="quote-result-price"></dd>
        </dl>
      </div>
    </div>

    <div class="quote-wrapper">

      <q-default />

    </div>

  </div>
</template>

<script>
import media from '@js/media';
import onResize from '@js/onresize';

import QDefault from './questions/default.vue';

import store from './store';

let lead, footerH, bodyH, winH, y;

export default {
  components: {
    QDefault
  },
  data() {
    return {
      step: 1,
      store
    };
  },
  computed: {
    carTypeLabel() {
      const carType = this.store.getCarType();
      return carType ? carType.label : '';
    },
    carTypePrice() {
      const carType = this.store.getCarType();
      return carType ? `${carType.pricePerDay}円/日` : '';
    },
    prefectureLabel() {
      const prefecture = this.store.getPrefecture();
      return prefecture ? prefecture.label : '';
    }
  },
  mounted() {
    this.init();
    onResize(this.init);
  },
  methods: {
    init() {
      media.init();

      lead = document.querySelector('#quote-app .quote-lead');
      lead.style.top = null;
      lead.style.position = null;

      if (media.isDesktop()) {
        window.addEventListener('scroll', this.scrollHandler);
      }
      else {
        window.removeEventListener('scroll', this.scrollHandler);
      }
    },
    scrollHandler() {
      const scrl = window.pageYOffset;
      footerH = document.getElementById('footer').clientHeight;
      bodyH = document.querySelector('body').clientHeight;
      winH = window.innerHeight;
      y = bodyH - footerH - winH;

      if (scrl > y) {
        lead.style.position = 'absolute';
        lead.style.top = `${y + 90}px`;
      } else {
        lead.style.position = 'fixed';
        lead.style.top = '90px';
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
