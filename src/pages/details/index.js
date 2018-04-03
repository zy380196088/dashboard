/* eslint-disable */
import Vue from 'vue';
import Index from './index.vue';

Vue.config.productionTip = false;

const Details = new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>',
});

Vue.use({
  Details,
});