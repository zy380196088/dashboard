/* eslint-disable */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Index from './index.vue';
import router from './router/index'

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})