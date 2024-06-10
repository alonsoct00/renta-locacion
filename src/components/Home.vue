<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body parallax" :style="{ backgroundImage: `url(${basicInfo ? basicInfo.heroImageUrl.url : ''})` }"
  >
      <div class="container" v-if="basicInfo">
        <h1 class="title">{{ basicInfo.title }}</h1>
        <p class="subtitle">{{ basicInfo.description }}</p>
      </div>
      <div v-else>
        Cargando...
      </div>
    </div>
    <div class="intro_info">
      <div class="container">
        <h2></h2>
        <p></p>
      </div>
      <div class="container">
        <h2>Ideal para...</h2>
        <div class="choice_list">
          <div class="choice_item">
            <span class="choice_icon">icon vacations</span>
            <p>Vacaciones</p>
          </div>
          <div class="choice_item">
            <span class="choice_icon">icon corporate</span>
            <p>Viaje de negocios</p>
          </div>
          <div class="choice_item">
            <span class="choice_icon">icon short accomodation</span>
            <p>Alojamiento temporal</p>
          </div>
          <div class="choice_item">
            <span class="choice_icon">icon rent apartment</span>
            <p>Renta de largo plazo</p>
          </div>
        </div>
      </div>
    </div>
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
                  heroImageUrl {
                      url
                  }
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
<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-body {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.parallax {
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.content {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.title, .subtitle {
  margin: 0;
}
</style>