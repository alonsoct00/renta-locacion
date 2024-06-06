<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/gallery">Gallery</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
          <router-link class="navbar-item" to="/policies">Policies</router-link>
          <router-link class="navbar-item" to="/amenities">Amenities</router-link>
          <router-link class="navbar-item" to="/services">Services</router-link>
          <router-link class="navbar-item" to="/local-guide">Local Guide</router-link>
        </div>
      </div>
    </nav>
    <HomeSection />
    <GallerySection />
    <ContactSection />
    <BookingForm />
  </div>
</template>

<script>
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery.vue';
import ContactSection from '@/components/Contact.vue';
import BookingForm from './components/BookingForm.vue';

export default {
  name: 'App',
  components: {
    HomeSection,
    BookingForm,
    GallerySection,
    ContactSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  background-color: #00d1b2;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar-item {
  color: white;
}

.navbar-item:hover {
  background-color: #00b89c;
}

.section {
  padding-top: 100px;
}
</style>