<template>
  <section id="gallery" class="section">
    <div class="container">
      <h1 class="title">{{ $t('gallery.title') }}</h1>
      <div class="row">
        <div class="col-md-3" v-for="(image, index) in images" :key="index">
          <div class="card mb-4 shadow-sm">
            <img :src="image.url" :alt="image.alt" class="card-img-top" @click="openModal(image, index)" style="cursor: pointer;">
          </div>
        </div>
      </div>
    </div>

    <b-modal v-model="isModalActive" size="lg" hide-footer class="custom-modal">
      <template #modal-header>
        <h5 class="modal-title">{{ modalTitle }}</h5>
        <b-button variant="secondary" class="close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </b-button>
      </template>
      <div class="modal-body">
        <b-button variant="link" class="modal-nav-button btn-prev" @click="prevImage">
          <i class="bi bi-chevron-left"></i>
        </b-button>
        <img :src="currentImage.url" class="img-fluid modal-image" :alt="currentImage.alt" />
        <b-button variant="link" class="modal-nav-button btn-next" @click="nextImage">
          <i class="bi bi-chevron-right"></i>
        </b-button>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      images: [
        { url: '/img/sala-2.webp', alt: 'Sala' },
        { url: '/img/cocina-1.webp', alt: 'Cocina' },
        { url: '/img/cocina-4.webp', alt: 'Cocina' },
        { url: '/img/comedor-1.webp', alt: 'Comedor' },
        { url: '/img/estudio-1.webp', alt: 'Estudio' },
        { url: '/img/recamara-1.webp', alt: 'Recámara' },
        { url: '/img/recamara-a-1.webp', alt: 'Recámara' },
        { url: '/img/banio-1.webp', alt: 'Baño' },
        { url: '/img/centro-lavado-1.webp', alt: 'Centro de lavado' }
      ],
      isModalActive: false,
      currentImage: {},
      currentIndex: 0,
      modalTitle: ''
    };
  },
  methods: {
    openModal(image, index) {
      this.currentImage = image;
      this.currentIndex = index;
      this.modalTitle = image.alt;
      this.isModalActive = true;
      document.addEventListener('keydown', this.handleEsc);
    },
    closeModal() {
      this.isModalActive = false;
      setTimeout(() => {
        this.currentImage = {};
        this.modalTitle = '';
      }, 300);
      document.removeEventListener('keydown', this.handleEsc);
    },
    handleEsc(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        this.closeModal();
      }
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
      this.modalTitle = this.currentImage.alt;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
      this.modalTitle = this.currentImage.alt;
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
  width: 100%;
}

.custom-modal .modal-body, .modal-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.modal-nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
}

.modal-nav-button:hover {
  color: #000;
}

.btn {
  position: absolute;
}

.btn.close {
  right: 20px;
}

.btn-next {
  right: 0;
}
</style>
