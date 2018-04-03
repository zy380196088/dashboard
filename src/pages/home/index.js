/* eslint-disable */
import Vue from 'vue';
import Index from './index.vue';

Vue.config.productionTip = false;


const Home = new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>',
});

Vue.use({
  Home,
})