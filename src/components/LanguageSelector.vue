<!-- src/components/LanguageSelector.vue -->
<template>
    <div class="language-selector">
      <b-dropdown id="dropdown-language" text="EN/ES" variant="secondary" class="m-md-2">
        <b-dropdown-item @click="changeLanguage('es')">Español</b-dropdown-item>
        <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
      </b-dropdown>
    </div>
  </template>

  <script>
  export default {
    name: 'LanguageSelector',
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
  }
  </script>

  <style scoped>
  .language-selector {
    margin-right: 1rem;
  }
  </style>
