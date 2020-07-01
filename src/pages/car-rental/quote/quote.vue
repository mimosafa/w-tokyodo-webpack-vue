<template>
  <div class="quote-app">
    <section class="quote-lead">
      <price-table />
    </section>

    <h1>Step: {{ step }}</h1>

    <keep-alive>
      <car-type v-if="step === 1" @update="updateResponses" />
      <prefecture v-if="step === 2" @update="updateResponses" />
      <period v-if="step === 3" @update="updateResponses" />
      <options v-if="step === 4" @update="updateResponses" />
      <confirm v-if="step === 5" :responses="responses" />
    </keep-alive>

    <button @click="prev" v-show="step !== 1">Prev</button>
    <button @click="next" v-show="step !== 5">Next</button>
    <hr>
    <pre>
      {{ responses }}
    </pre>
  </div>
</template>

<script>
import PriceTable from './components/price-table.vue';
import CarType from './components/1_car-type.vue';
import Prefecture from './components/2_prefecture.vue';
import Period from './components/3_period.vue';
import Options from './components/4_options.vue';
import Confirm from './components/5_confirm.vue';

import onResize from '@js/onresize';

export default {
  components: {
    PriceTable,
    CarType,
    Prefecture,
    Period,
    Options,
    Confirm
  },
  data() {
    return {
      step: 1,
      responses: {
        carType: null,
        prefecture: null,
        dateStart: null,
        dateEnd: null,
        options: []
      }
    };
  },
  mounted() {
    this.initStyles();
    onResize(this.initStyles);
  },
  methods: {
    updateResponses(responses) {
      Object.assign(this.responses, responses);
    },
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    initStyles() {
      const lead = this.$el.querySelector('.quote-lead');
      const winH = window.innerHeight;
      const hdrH = document.getElementById('header').clientHeight;

      lead.style.minHeight = `${winH - hdrH}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.quote-app {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.quote-lead {
  @include phone {
    display: block;
  }
  @include desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  background: {
    //color: rgba(0, 0, 0, .1);
  }
  @include phone {
    background-size: contain;
  }
  @include desktop {
    image: url("./img/dog.png");
    repeat: no-repeat;
    background-position: 125% 115%;
  }
}





</style>
