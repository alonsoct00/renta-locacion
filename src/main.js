import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta';
import FeatherIcon from 'vue-feather-icons';

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.component('FeatherIcon', FeatherIcon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
