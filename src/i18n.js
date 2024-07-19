// src/i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: 'Welcome',
    home: {
      title: 'Department GOYO',
      subtitle: 'Welcome',
      manuals: 'Manuals',
      manualInfo: 'The accommodation is ten minutes walking from Ferrería metro...',
      downloadManuals: 'You can download the following manuals to take with you:',
      idealFor: 'Ideal for...',
      vacation: 'Vacation',
      businessTrip: 'Business trip',
      temporaryStay: 'Temporary stay',
      longTermRent: 'Long term rent',
      loading: 'Loading...'
    },
    // Agrega más traducciones aquí
  },
  es: {
    welcome: 'Bienvenido',
    home: {
      title: 'Departamento GOYO',
      subtitle: 'Bienvenido',
      manuals: 'Manuales',
      manualInfo: 'El alojamiento está a diez minutos caminando del metro Ferrería...',
      downloadManuals: 'Puedes descargar los siguientes manuales para llevarlos contigo:',
      idealFor: 'Ideal para...',
      vacation: 'Vacaciones',
      businessTrip: 'Viaje de negocios',
      temporaryStay: 'Alojamiento temporal',
      longTermRent: 'Renta de largo plazo',
      loading: 'Cargando...'
    },
    // Agrega más traducciones aquí
  }
};

const i18n = new VueI18n({
  locale: 'es', // Idioma predeterminado
  fallbackLocale: 'en', // Idioma de respaldo
  messages
});

export default i18n;
