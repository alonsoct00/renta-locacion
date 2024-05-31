<template>
    <section class="section">
      <div class="container">
        <h1 class="title">Galería de Fotos</h1>
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="(image, index) in images" :key="index">
            <figure class="image is-4by3">
              <img :src="image" @click="openModal(image)">
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
          'url-de-la-imagen-1.jpg',
          'url-de-la-imagen-2.jpg',
          // Agrega más URLs de imágenes aquí
        ],
        isModalActive: false,
        currentImage: ''
      }
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

  <style scoped>
  /* Estilos adicionales para la galería */
  </style>
