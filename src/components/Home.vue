<template>
    <section class="section">
      <div class="container" v-if="basicInfo">
        <h1 class="title">{{ basicInfo.title }}</h1>
        <p class="subtitle">{{ basicInfo.description }}</p>
        <p></p>
      </div>
      <div v-else>
        Cargando...
      </div>
      <p>hola</p>
      <BookingIframe />
    </section>
  </template>

  <script>
  import client from '@/services/datocms';
  import BookingIframe from '@/components/BookingIframe.vue';

  export default {
    name: 'HomeSection',
    components: {
    BookingIframe
  },
  data() {
      return {
        basicInfo: null,
        isLoading: true,
        error: null
      };
    },
    metaInfo() {
      return {
        title: this.basicInfo ? this.basicInfo.title : 'Home - Rental Location',
        meta: [
          {
            name: 'description',
            content: this.basicInfo ? this.basicInfo.description : 'Welcome to our rental location, the perfect place to stay for your vacation.',
          },
          // Open Graph tags
          {
            property: 'og:title',
            content: this.basicInfo ? this.basicInfo.title : 'Home - Rental Location'
          },
          {
            property: 'og:description',
            content: this.basicInfo ? this.basicInfo.description : 'Welcome to our rental location, the perfect place to stay for your vacation.'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: window.location.href
          },
          {
            property: 'og:image',
            content: 'https://example.com/path/to/image.jpg' // Cambia a la URL de tu imagen
          }
        ]
      };
    },
    mounted() {
      this.fetchBasicInfo();
    },
    methods: {
      async fetchBasicInfo() {
        try {
          const response = await client.post('', {
            query: `
              query Homepage {
                homepage {
                  title
                  description
                }
              }
            `
          });
          console.log(response.data);
          this.basicInfo = response.data.data.homepage;
        } catch (error) {
          console.error('Error fetching basic info:', error);
          this.error = error;
        } finally {
          this.isLoading = false;
        }
      }
    }
  }
  </script>
