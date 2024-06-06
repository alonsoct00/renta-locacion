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

      <div class="modal" :class="{ 'is-active': isModalActive, 'slide-in': isModalActive, 'slide-out': !isModalActive }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
          <p class="image">
            <img :src="currentImage">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal">Cerrar</button>
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
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' }
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
      setTimeout(() => {
        this.currentImage = '';
      }, 300); // Match this timeout to the CSS animation duration
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal.is-active {
  opacity: 1;
}

.modal-content {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.modal.is-active .modal-content {
  transform: translateY(0);
}

.modal.slide-in .modal-content {
  animation: slideIn 0.3s forwards;
}

.modal.slide-out .modal-content {
  animation: slideOut 0.3s forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
