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
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni alias fugit ut amet, exercitationem quam nulla in corrupti earum sequi natus rem qui consectetur iste quidem? Modi, explicabo accusamus.</p>
      </div>
      <div class="container">
        <h2>Ideal para...</h2>
        <div class="choice_list">
          <div class="choice_item">
            <MapIcon class="choice_icon"/>
            <p>Vacaciones</p>
          </div>
          <div class="choice_item">
            <BriefcaseIcon class="choice_icon" />
            <p>Viaje de negocios</p>
          </div>
          <div class="choice_item">
            <KeyIcon class="choice_icon" />
            <p>Alojamiento temporal</p>
          </div>
          <div class="choice_item">
            <HomeIcon class="choice_icon" />
            <p>Renta de largo plazo</p>
          </div>
        </div>
      </div>
    </div>
    <BookingIframe />
    <ImageSlider :images="imageList" />
  </section>
</template>

<script>
import client from '@/services/datocms';
import BookingIframe from '@/components/BookingIframe.vue';
import { BriefcaseIcon, MapIcon, KeyIcon, HomeIcon } from 'vue-feather-icons';
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  name: 'HomeSection',
  components: {
    BookingIframe,
    ImageSlider,
    BriefcaseIcon,
    MapIcon,
    KeyIcon,
    HomeIcon
  },
  data() {
    return {
      basicInfo: null,
      isLoading: true,
      error: null,
      imageList: [
        'https://via.placeholder.com/800x300?text=Image+1',
        'https://via.placeholder.com/800x300?text=Image+2',
        'https://via.placeholder.com/800x300?text=Image+3'
      ]
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

.choice_list {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.choice_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #333;
}

.choice_icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.choice_icon i {
  color: #007bff;
}
</style>
