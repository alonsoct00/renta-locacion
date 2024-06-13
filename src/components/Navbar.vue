<template>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="/">Rental Location</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#home" @click.prevent="scrollTo('home')">Home</b-nav-item>
          <b-nav-item href="#amenities" @click.prevent="scrollTo('amenities')">Amenities</b-nav-item>
          <b-nav-item href="#local-guide" @click.prevent="scrollTo('local-guide')">Local Guide</b-nav-item>
          <b-nav-item href="#gallery" @click.prevent="scrollTo('gallery')">Gallery</b-nav-item>
          <b-nav-item href="#contact" @click.prevent="scrollTo('contact')">Contact</b-nav-item>
          <b-nav-item>
            <router-link to="/policies" class="nav-link" target="_blank">Policies</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>

  <script>
  export default {
    name: 'NavbarTop',
    methods: {
      scrollTo(section) {
        const element = document.getElementById(section);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 50, // Ajusta este valor según la altura de tu barra de navegación
            behavior: 'smooth'
          });
        }
      }
    }
  }
  </script>