<template>
    <section id="gallery" class="section">
      <div class="container">
        <h1 class="title">Photo Gallery</h1>
        <div class="row">
          <div class="col-md-3" v-for="(image, index) in images" :key="index">
            <div class="card mb-4 shadow-sm">
              <img :src="image.url" class="card-img-top" @click="openModal(image.url)" style="cursor: pointer;">
            </div>
          </div>
        </div>
      </div>

      <b-modal v-model="isModalActive" size="lg" hide-footer class="custom-modal">
        <template #modal-header>
          <h5 class="modal-title">Image Preview</h5>
          <b-button variant="outline-light" class="close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </b-button>
        </template>
        <img :src="currentImage" class="img-fluid modal-image" />
      </b-modal>
    </section>
  </template>

  <script>
  export default {
    name: 'GallerySection',
    data() {
      return {
        images: [
          { url: '/img/sala-2.webp' },
          { url: '/img/cocina-1.webp' },
          { url: '/img/cocina-4.webp' },
          { url: '/img/comedor-1.webp' },
          { url: '/img/estudio-1.webp' },
          { url: '/img/recamara-1.webp' },
          { url: '/img/recamara-a-1.webp' },
          { url: '/img/banio-1.webp' },
          { url: '/img/centro-lavado-1.webp' },
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
        }, 300);
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
  .card {
    cursor: pointer;
  }

  #gallery h1 {
    margin-bottom: 60px;
  }

  .custom-modal .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #343a40;
    color: white;
    border-bottom: none;
  }

  .custom-modal .close {
    color: white;
  }

  .custom-modal .modal-content {
    background-color: #212529;
    color: white;
    border-radius: 10px;
    overflow: hidden;
  }

  .modal-image {
    border-radius: 0 0 10px 10px;
    max-height: 80vh;
    object-fit: cover;
  }

  .custom-modal .modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  </style>
