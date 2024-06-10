<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/amenities">Amenities</router-link>
          <router-link class="navbar-item" to="/services">Services</router-link>
          <router-link class="navbar-item" to="/local-guide">Local Guide</router-link>
          <router-link class="navbar-item" to="/gallery">Gallery</router-link>
          <router-link class="navbar-item" to="/policies">Policies</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
    <HomeSection />
    <GallerySection />
    <ContactSection />

  </div>
</template>

<script>
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery.vue';
import ContactSection from '@/components/Contact.vue';


export default {
  name: 'App',
  components: {
    HomeSection,
    GallerySection,
    ContactSection
  }
}
</script>

<style>

body, html {
  margin: 0;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
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

.tally-block.tally-block-input-text,
.tally-block.tally-block-input-email,
.tally-block.tally-block-input-phone-number,
.tally-block.tally-block-input-date,
.tally-block.tally-block-input-number,
.tally-block.tally-block-dropdown,
.tally-block.tally-block-textarea {
	width: 50%;
}
.tally-block.tally-block-title {
    display: inline-block;
    max-width: 26%;
    width: auto;
}
</style>