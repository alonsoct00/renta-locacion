<template>
  <section class="amenities-section">
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
        'https://via.placeholder.com/800x600?text=Image+1',
        'https://via.placeholder.com/800x600?text=Image+2',
        'https://via.placeholder.com/800x600?text=Image+3'
      ]
    };
  },
  }
  </script>

<style scoped>
.amenities-section .slider {
  border: 2px solid #ddd;
  border-radius: 10px;
}

.amenities-section .slider .slide {
  min-height: 500px; /* Ajustar altura según necesidades */
}
</style>