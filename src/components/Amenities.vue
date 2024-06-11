<template>
  <section>
      <div class="container">
      <h1>Amenidades</h1>
      <ImageSlider :images="imageList" />
    </div>
  </section>

  </template>

  <script>
  import { } from 'vue-feather-icons';
  import ImageSlider from '@/components/ImageSlider.vue';
  export default {
    name: 'AmenitiesSection',
    components: {
    ImageSlider,
  },
  data() {
    return {
      imageList: [
        'https://via.placeholder.com/800x300?text=Image+1',
        'https://via.placeholder.com/800x300?text=Image+2',
        'https://via.placeholder.com/800x300?text=Image+3'
      ]
    };
  },
  }
  </script>