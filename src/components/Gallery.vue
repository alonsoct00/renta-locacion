<template>
  <section id="gallery" class="section">
    <div class="container">
      <h1 class="title">Photo Gallery</h1>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(image, index) in images" :key="index">
          <figure class="image is-4by3">
            <img :src="image.url" @click="openModal(image.url)">
          </figure>
        </div>
      </div>

      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
          <p class="image">
            <img :src="currentImage">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      images: [
        { url: 'https://example.com/path/to/image1.jpg' },
        { url: 'https://example.com/path/to/image2.jpg' },
        { url: 'https://example.com/path/to/image3.jpg' }
      ],
      isModalActive: false,
      currentImage: ''
    };
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
      this.currentImage = '';
    }
  }
}
</script>