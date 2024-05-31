<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#home">Home</a>
          <a class="navbar-item" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    <HomeSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '@/components/Home.vue';
import ContactSection from '@/components/Contact.vue';

export default {
  name: 'App',
  components: {
    HomeSection,
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
}

.navbar-item {
  color: white;
}

.navbar-item:hover {
  background-color: #00b89c;
}
</style>