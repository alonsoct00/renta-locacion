<template>
  <section class="hero is-fullheight-with-navbar" id="home">
    <div class="hero-body parallax" :style="{ backgroundImage: `url(${basicInfo ? basicInfo.heroImageUrl.url : ''})` }">
      <div class="container" v-if="basicInfo">
        <h1 class="title">{{ $t('home.title') }}</h1>
        <h3 class="subtitle">{{ $t('home.subtitle') }}</h3>
        <!--<h1 class="title">{{ basicInfo.title }}</h1>
        <p class="subtitle">{{ basicInfo.description }}</p>-->
      </div>
      <div v-else>
        {{ $t('home.loading') }}
      </div>
    </div>

    <div class="intro_info">
      <div class="container">
        <h2>{{ $t('home.manuals') }}</h2>
        <p>{{ $t('home.manualInfo') }}</p>
        <p>{{ $t('home.downloadManuals') }}</p>
        <div class="guias-pdf">
        <b-button
          v-if="$i18n.locale === 'es'"
          variant="primary"
          @click="openPdfInNewTab('pdf2')"
        >
          {{ $t('home.viewManualEs') }}
        </b-button>
        <b-button
          v-if="$i18n.locale === 'en'"
          variant="primary"
          @click="openPdfInNewTab('pdf1')"
        >
          {{ $t('home.viewManualEn') }}
        </b-button>
      </div>
      </div>

      <div class="container">
        <h2>{{ $t('home.idealFor') }}</h2>
        <div class="choice_list">
          <div class="choice_item">
            <MapIcon class="choice_icon" />
            <p>{{ $t('home.vacation') }}</p>
          </div>
          <div class="choice_item">
            <BriefcaseIcon class="choice_icon" />
            <p>{{ $t('home.businessTrip') }}</p>
          </div>
          <div class="choice_item">
            <KeyIcon class="choice_icon" />
            <p>{{ $t('home.temporaryStay') }}</p>
          </div>
          <div class="choice_item">
            <HomeIcon class="choice_icon" />
            <p>{{ $t('home.longTermRent') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <BookingIframe />
        </div>
        <div class="col-md-6 col-xs-12">
          <AirbnbEmbed />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '@/services/datocms';
import BookingIframe from '@/components/BookingIframe.vue';
import { BriefcaseIcon, MapIcon, KeyIcon, HomeIcon } from 'vue-feather-icons';
import AirbnbEmbed from '@/components/AirbnbEmbed.vue';

export default {
  name: 'HomeSection',
  components: {
    BookingIframe,
    AirbnbEmbed,
    BriefcaseIcon,
    MapIcon,
    KeyIcon,
    HomeIcon,

  },
  data() {
    return {
      basicInfo: null,
      isLoading: true,
      error: null,
      pdfUrls: {
        pdf1: '/docs/manual-goyo-en.pdf',
        pdf2: '/docs/manual-goyo-es.pdf'
      },
    };
  },
  metaInfo() {
    return {
      title: this.basicInfo ? this.basicInfo.title : this.$t('home.title'),
      meta: [
        {
          name: 'description',
          content: this.basicInfo ? this.basicInfo.description : this.$t('home.manualInfo'),
        },
        {
          property: 'og:title',
          content: this.basicInfo ? this.basicInfo.title : this.$t('home.title')
        },
        {
          property: 'og:description',
          content: this.basicInfo ? this.basicInfo.description : this.$t('home.manualInfo')
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
          content: '' // Cambia a la URL de tu imagen
        }
      ]
    };
  },
  mounted() {
    this.fetchBasicInfo();
  },
  methods: {

  openPdfInNewTab(pdfKey) {
      const url = this.pdfUrls[pdfKey];
      if (url) {
        window.open(url, '_blank');
      } else {
        console.error('PDF URL not found for key:', pdfKey);
      }
    },
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
  height: 80vh;
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

.title,
.subtitle {
  margin: 0;

}

h1 {
  font-size: 3.5rem;
  text-shadow: -1px 2px 1px #ffffff73;
}

h3 {
  font-size: 2.5rem;
  text-shadow: -1px 2px 1px #ffffff73;
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

.intro_info {
  margin-top: 60px;

}

.intro_info .container {
  margin-bottom: 60px;
}

.guias-pdf {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
}
</style>
