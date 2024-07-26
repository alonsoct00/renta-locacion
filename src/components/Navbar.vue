<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" class="navbar-custom">
    <b-navbar-brand href="/" class="navbar-brand"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#home" @click.prevent="scrollTo('home')" class="nav-item">{{ $t('navbar.home') }}</b-nav-item>
        <b-nav-item href="#amenities" @click.prevent="scrollTo('amenities')" class="nav-item">{{ $t('navbar.amenities')
          }}</b-nav-item>
        <!--<b-nav-item href="#local-guide" @click.prevent="scrollTo('local-guide')" class="nav-item">{{
            $t('navbar.localGuide') }}</b-nav-item>-->
        <b-nav-item href="#gallery" @click.prevent="scrollTo('gallery')" class="nav-item">{{ $t('navbar.gallery')
          }}</b-nav-item>
        <b-nav-item href="#contact" @click.prevent="scrollTo('contact')" class="nav-item">{{ $t('navbar.contact')
          }}</b-nav-item>
        <!----<b-nav-item @click="showPoliciesModal" class="nav-item">{{ $t('navbar.policies') }}</b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
    <LanguageSelector />
    <PoliciesModal ref="policiesModal" />
  </b-navbar>
</template>

<script>
import PoliciesModal from '@/components/PoliciesModal.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';

export default {
  name: 'NavbarTop',
  components: {
    PoliciesModal,
    LanguageSelector,
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    },
    showPoliciesModal() {
      this.$refs.policiesModal.show();
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #343a40;
  /* Color de fondo del navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Sombra */
}

.navbar-brand {
  color: #ffffff;
  /* Color del texto del brand */
  font-size: 1.5rem;
  /* Tamaño de fuente */
}

.nav-item {
  color: #ffffff !important;
  /* Color del texto de los ítems */
  font-size: 1rem;
  /* Tamaño de fuente */
}

.nav-item:hover,
.nav-item:focus {
  background-color: rgba(255, 255, 255, 0.1);
  /* Color de fondo al pasar el mouse o hacer foco */
}

.nav-link {
  color: #ffffff;
}
</style>
