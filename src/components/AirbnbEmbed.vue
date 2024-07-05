<template>
    <div class="airbnb-embed-frame" data-id="1162645796196332514" data-view="home" data-hide-price="true" :style="{ width: '100%', height: '100%', margin: 'auto' }">
      <a :href="airbnbUrl">View On Airbnb</a>
      <a :href="airbnbUrl" rel="nofollow">Rental unit in Mexico City · ★New · 2 bedrooms · 3 beds · 1 bath</a>
    </div>
  </template>

  <script>
  export default {
    name: 'AirbnbEmbed',
    computed: {
      airbnbUrl() {
        return 'https://www.airbnb.com/rooms/1162645796196332514?guests=1&adults=1&s=66&source=embed_widget';
      }
    },
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
      script.async = true;
      this.$el.appendChild(script);
    }
  };
  </script>

  <style scoped>

  template {
    height: 100%;
  }
  .airbnb-embed-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0px solid #ddd;
    border-radius: 8px;
    padding: 16px 0;
    background-color: #fff;
    width: 100%;
    min-height: 100%;
  }
  </style>