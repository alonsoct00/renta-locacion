import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoq4zII_LZcan40hZTgPR336xoEC9je4Q',
    libraries: 'places', // Esto es necesario si deseas usar la funcionalidad de "lugares"
  },
});