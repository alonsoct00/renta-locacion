import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import i18n from './i18n';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(BootstrapVue);
Vue.use(VueMeta);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    // key: 'AIzaSyAoq4zII_LZcan40hZTgPR336xoEC9je4Q',
    libraries: 'places', // Puedes agregar más bibliotecas si es necesario
  },
});

console.log('Google Maps API Key:', process.env.VUE_APP_GOOGLE_MAPS_API_KEY);


Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
