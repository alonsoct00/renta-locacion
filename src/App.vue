<template>
  <div id="app">
    <NavbarTop />
    <HomeSection />
    <AmenitiesSection />
    <GallerySection />
    <ContactSection />
  </div>
</template>

<script>
import NavbarTop from '@/components/Navbar.vue';
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery2.vue';
import ContactSection from '@/components/Contact.vue';
import AmenitiesSection from '@/components/Amenities.vue';

export default {
  name: 'App',
  components: {
    NavbarTop,
    HomeSection,
    GallerySection,
    AmenitiesSection,
    ContactSection,
  }
}
</script>

<style>
body {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f5f5; /* Color de fondo general */
}

#app {
  text-align: center;
}


.section {
  padding-top: 100px; /* Espacio arriba para evitar que el navbar cubra el contenido */
}

/* Estilos para los bloques de formulario */
.tally-block.tally-block-input-text,
.tally-block.tally-block-input-email,
.tally-block.tally-block-input-phone-number,
.tally-block.tally-block-input-date,
.tally-block.tally-block-input-number,
.tally-block.tally-block-dropdown,
.tally-block.tally-block-textarea {
  width: 50%; /* Ancho del formulario */
}

.tally-block.tally-block-title {
  display: inline-block;
  max-width: 26%;
  width: auto;
}
</style>
