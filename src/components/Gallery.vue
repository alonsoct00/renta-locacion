<template>
  <section id="gallery" class="section">
    <div class="container">
      <h1 class="title">Photo Gallery</h1>
      <div class="masonry-grid">
        <div class="masonry-item" v-for="(image, index) in images" :key="index">
          <figure class="image is-4by3">
            <img :src="image.url" @click="openModal(image.url)">
          </figure>
        </div>
      </div>
    </div>
    <div class="modal"
        :class="{ 'is-active': isModalActive, 'slide-in': isModalActive, 'slide-out': !isModalActive }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-wrapper" @click="closeModal">
          <div class="modal-content">
            <button class="modal-close is-large" aria-label="close" @click="closeModal">Cerrar</button>
            <p class="image">
              <img :src="currentImage">
            </p>
          </div>

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
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
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
      document.addEventListener('keydown', this.handleEsc);
    },
    closeModal() {
      this.isModalActive = false;
      setTimeout(() => {
        this.currentImage = '';
      }, 300); // Match this timeout to the CSS animation duration
      document.removeEventListener('keydown', this.handleEsc);
    },
    handleEsc(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        this.closeModal();
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
}
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  clear: both;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-items: stretch;
  justify-content: space-evenly;
}

.masonry-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 0;
}

.modal.is-active {
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.modal-wrapper  {
  position: inherit;
  float: left;
  clear: both;
}


.modal.is-active.modal-wrapper {
  transform: translateY(50%);
  transition: transform 0.3s ease;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 5;
  display: inline-block;
  width: auto;
}

.modal-wrapper button.modal-close {
  position: absolute;
  top: 0;
  right: 0;
}

.modal.is-active .modal-wrapper {
  transform: translateY(0);
}

.modal.slide-in .modal-wrapper {
  animation: slideIn 0.3s forwards;
}

.modal.slide-out .modal-wrapper {
  animation: slideOut 0.3s forwards;
}

.modal.is-active .modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000030;
  z-index: 5;
}

.modal-content {
  display: inline-block;
  margin: 0 auto;
  width: auto;
  height: auto;
  position: relative;
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
