// src/i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: 'Welcome',
    navbar: {
      home: 'Home',
      amenities: 'Amenities',
      localGuide: 'Local Guide',
      gallery: 'Gallery',
      contact: 'Contact',
      policies: 'Policies',
    },
    home: {
      title: 'Department GOYO',
      subtitle: 'Welcome',
      manuals: 'Manuals',
      manualInfo: 'The accommodation is ten minutes walking from Ferrería metro...',
      viewManualEn: 'Download manual',
      downloadManuals: 'You can download the following manuals to take with you:',
      idealFor: 'Ideal for...',
      vacation: 'Vacation',
      businessTrip: 'Business trip',
      temporaryStay: 'Temporary stay',
      longTermRent: 'Long term rent',
      loading: 'Loading...'
    },
    amenities: {
      title: 'Amenities and Services',
      services: 'Service',
      amenitiesList: {
        bathroom: 'Bathroom',
        towels: 'Towels, sheets, soap, and toilet paper',
        hotWater: 'Hot water',
        hairDryer: 'Hair dryer',
        cleaningProducts: 'Cleaning products',
        washingMachine: 'Washing machine',
        wardrobe: 'Clothes storage: Wardrobe',
        hangers: 'Hangers',
        blackoutCurtains: 'Blackout curtains or blinds',
        iron: 'Iron'
      },
      homeSafety: 'Home Safety',
      safetyList: {
        securityCameras: 'Security cameras on property',
        fireExtinguisher: 'Fire extinguisher',
        firstAidKit: 'First aid kit'
      },
      internetOffice: 'Internet and Office',
      internetOfficeList: {
        wifi: 'Wifi',
        workArea: 'Work area'
      },
      kitchenDining: 'Kitchen and Dining',
      kitchenDiningList: {
        kitchenUse: 'Kitchen available for guest use',
        microwave: 'Microwave',
        cookingBasics: 'Pots and pans, oil, salt and pepper',
        dishes: 'Dishes, bowls, utensils, chopsticks, plates, cups, etc.',
        miniFridge: 'Mini refrigerator',
        stoveOven: 'Gas stove and oven',
        coffeeMaker: 'Coffee maker: espresso machine, Nespresso, manual filter coffee maker',
        blender: 'Blender',
        diningTable: 'Dining table'
      },
      outdoors: 'Outdoors',
      outdoorsList: {
        balcony: 'Private patio or balcony',
        bbq: 'Barbecue'
      },
      additionalServices: 'Services',
      additionalServicesList: {
        petsAllowed: 'Pets allowed (Service animals always allowed)',
        selfCheckin: 'Self check-in',
        smartLock: 'Smart lock'
      },
      notIncluded: 'Not included',
      notIncludedList: {
        noTV: 'Not available: TV',
        noAC: 'Not available: Air conditioning',
        noSmokeDetector: 'Not available: Smoke detector',
        noCO2Detector: 'Not available: Carbon monoxide detector',
        noHeating: 'Not available: Heating'
      }
    },
    gallery: {
      title: 'Photo Gallery',
      modalTitle: 'Image Preview',
      images: [
        { url: '/img/sala-2.webp', alt: 'Living room' },
        { url: '/img/cocina-1.webp', alt: 'Kitchen' },
        { url: '/img/cocina-4.webp', alt: 'Kitchen' },
        { url: '/img/comedor-1.webp', alt: 'Dining room' },
        { url: '/img/estudio-1.webp', alt: 'Study' },
        { url: '/img/recamara-1.webp', alt: 'Bedroom' },
        { url: '/img/recamara-a-1.webp', alt: 'Bedroom A' },
        { url: '/img/banio-1.webp', alt: 'Bathroom' },
        { url: '/img/centro-lavado-1.webp', alt: 'Laundry center' }
      ]
    },
    contact: {
      title: 'Contact Information',
      address: 'Address:',
      phone: 'Phone:',
      email: 'Email:',
      wifi: 'WiFi Network:',
      wifiPassword: 'Password:',
    }
    // Add more translations here
  },
  es: {
    welcome: 'Bienvenido',
    navbar: {
      home: 'Inicio',
      amenities: 'Amenidades',
      localGuide: 'Guía local',
      gallery: 'Galería',
      contact: 'Contacto',
      policies: 'Políticas',
    },
    home: {
      title: 'Departamento GOYO',
      subtitle: 'Bienvenido',
      manuals: 'Manuales',
      viewManualEs: 'Ver manual',
      manualInfo: 'El alojamiento está a diez minutos caminando del metro Ferrería...',
      downloadManuals: 'Puedes descargar los siguientes manuales para llevarlos contigo:',
      idealFor: 'Ideal para...',
      vacation: 'Vacaciones',
      businessTrip: 'Viaje de negocios',
      temporaryStay: 'Alojamiento temporal',
      longTermRent: 'Renta de largo plazo',
      loading: 'Cargando...'
    },
    amenities: {
      title: 'Amenidades y Servicios',
      services: 'Servicio',
      amenitiesList: {
        bathroom: 'Baño',
        towels: 'Toallas, sábanas, jabón y papel higiénico',
        hotWater: 'Agua caliente',
        hairDryer: 'Secadora de cabello',
        cleaningProducts: 'Productos de limpieza',
        washingMachine: 'Lavadora',
        wardrobe: 'Espacio para guardar ropa: Ropero',
        hangers: 'Ganchos',
        blackoutCurtains: 'Persianas o cortinas opacas',
        iron: 'Plancha'
      },
      homeSafety: 'Seguridad en el hogar',
      safetyList: {
        securityCameras: 'Cámaras de seguridad en interiores y exteriores en la propiedad',
        fireExtinguisher: 'Extintor de incendios',
        firstAidKit: 'Botiquín'
      },
      internetOffice: 'Internet y oficina',
      internetOfficeList: {
        wifi: 'Wifi',
        workArea: 'Área para trabajar'
      },
      kitchenDining: 'Cocina y comida',
      kitchenDiningList: {
        kitchenUse: 'Cocina disponible para el uso de los huéspedes',
        microwave: 'Microondas',
        cookingBasics: 'Ollas y sartenes, aceite, sal y pimienta',
        dishes: 'Platos, platos hondos, cubiertos, palillos chinos, platos, tazas, etc.',
        miniFridge: 'Mini refrigerador',
        stoveOven: 'Estufa y horno de gas Mabe',
        coffeeMaker: 'Cafetera: máquina de espresso, Nespresso, cafetera manual de filtro',
        blender: 'Licuadora',
        diningTable: 'Mesa de comedor'
      },
      outdoors: 'Exteriores',
      outdoorsList: {
        balcony: 'Patio o balcón privado',
        bbq: 'Barbacoa'
      },
      additionalServices: 'Servicios',
      additionalServicesList: {
        petsAllowed: 'Se admiten mascotas (Los animales de asistencia siempre están permitidos)',
        selfCheckin: 'Llegada autónoma',
        smartLock: 'Cerradura inteligente'
      },
      notIncluded: 'No incluidos',
      notIncludedList: {
        noTV: 'No disponible: TV',
        noAC: 'No disponible: Aire acondicionado',
        noSmokeDetector: 'No disponible: Detector de humo',
        noCO2Detector: 'No disponible: Detector de monóxido de carbono',
        noHeating: 'No disponible: Calefacción'
      }
    },
    gallery: {
      title: 'Galería de Fotos',
      modalTitle: 'Vista Previa de Imagen',
      images: [
        { url: '/img/sala-2.webp', alt: 'Sala' },
        { url: '/img/cocina-1.webp', alt: 'Cocina' },
        { url: '/img/cocina-4.webp', alt: 'Cocina' },
        { url: '/img/comedor-1.webp', alt: 'Comedor' },
        { url: '/img/estudio-1.webp', alt: 'Estudio' },
        { url: '/img/recamara-1.webp', alt: 'Recámara' },
        { url: '/img/recamara-a-1.webp', alt: 'Recámara' },
        { url: '/img/banio-1.webp', alt: 'Baño' },
        { url: '/img/centro-lavado-1.webp', alt: 'Centro de lavado' }
      ]
    },
    contact: {
      title: 'Información de Contacto',
      address: 'Dirección:',
      phone: 'Teléfono:',
      email: 'Email:',
      wifi: 'Red WiFi:',
      wifiPassword: 'Contraseña:',
    }
    // Add more translations here
  }
};

const i18n = new VueI18n({
  locale: 'es', // Idioma predeterminado
  fallbackLocale: 'en', // Idioma de respaldo
  messages
});

export default i18n;
