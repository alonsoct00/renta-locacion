<template>
    <div>
      <iframe
        :src="iframeSrc"
        data-tally-src="https://tally.so/embed/w4kvJd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="644"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Book a stay">
      </iframe>
    </div>
  </template>

  <script>
  export default {
    name: 'BookingIframe',
    data() {
      return {
        iframeSrc: 'https://tally.so/embed/w4kvJd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
      };
    },
    mounted() {
      this.loadTallyScript();
    },
    methods: {
      loadTallyScript() {
        const scriptUrl = 'https://tally.so/widgets/embed.js';
        const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

        if (!existingScript) {
          const script = document.createElement('script');
          script.src = scriptUrl;
          script.onload = this.loadEmbeds;
          script.onerror = this.loadEmbeds;
          document.body.appendChild(script);
        } else {
          this.loadEmbeds();
        }
      },
      loadEmbeds() {
        if (typeof Tally !== 'undefined') {
          Tally.loadEmbeds();
        } else {
          document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc;
          });
        }
      }
    }
  };
  </script>
