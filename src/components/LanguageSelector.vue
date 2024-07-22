<!-- src/components/LanguageSelector.vue -->
<template>
  <div class="language-selector">
    <b-dropdown id="dropdown-language" text=" " variant="secondary" class="m-md-2">
      <template #button-content>
        <img :src="currentFlag" alt="Current Language" class="flag-icon">
      </template>
      <b-dropdown-item @click="changeLanguage('es')">
        <img src="@/assets/flags/es.png" alt="Español" class="flag-icon"> ES
      </b-dropdown-item>
      <b-dropdown-item @click="changeLanguage('en')">
        <img src="@/assets/flags/en.png" alt="English" class="flag-icon"> EN
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      currentFlag: this.$i18n.locale === 'es' ? require('@/assets/flags/es.png') : require('@/assets/flags/en.png')
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.currentFlag = require(`@/assets/flags/${lang}.png`);
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.currentFlag = require(`@/assets/flags/${newLocale}.png`);
    }
  }
}
</script>

<style scoped>
.language-selector {
  margin-right: 0.5rem;
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
</style>
