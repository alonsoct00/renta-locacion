<template>
  <div id="app">
    <NavbarTop />
    <HomeSection />
    <AmenitiesSection/>
    <GallerySection />
    <LocalGuideSection />
    <ContactSection />

  </div>
</template>

<script>
import NavbarTop from '@/components/Navbar.vue';
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery2.vue';
import LocalGuideSection from '@/components/LocalGuide.vue';
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
    LocalGuideSection,
  }
}
</script>

<style>

body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
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