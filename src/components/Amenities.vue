<template>
  <section class="amenities-section" id="amenities">
    <div class="container">
      <div class="row row-flex">
        <div class="col-md-12 mx-3">
          <h1>Amenidades y servicios</h1>
        </div>
        <div class="col-md-6 col-xs-12">
          <h3>Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates ipsum delectus quos
            nostrum quia, facilis veniam quam voluptatum incidunt accusamus suscipit eaque sint voluptas temporibus iure
            laudantium minima dolore.</p>
        </div>
        <div class="col-md-6 col-xs-12">
          <ImageSlider :images="imageList" />
        </div>
      </div>
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
  min-height: 500px;
  /* Ajustar altura según necesidades */
}
</style>