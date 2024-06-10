<template>
    <div>
      <iframe
        :src="iframeSrc"
        data-tally-src="https://tally.so/embed/w4kvJd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="960"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        class="bookingIframe"
        title="Book a stay"
        @load="onIframeLoad">
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
          this.onIframeLoad();
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
      },
      onIframeLoad(event) {
        const iframe = event.target;
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Inject styles into the iframe's document
        const styleElement = iframeDocument.createElement('style');
        styleElement.textContent = `
          .tally-block.tally-block-input-text,
          .tally-block.tally-block-input-email,
          .tally-block.tally-block-input-phone-number,
          .tally-block.tally-block-input-date,
          .tally-block.tally-block-input-number,
          .tally-block.tally-block-dropdown,
          .tally-block.tally-block-textarea {
            width: 50%;
          }
          .tally-block.tally-block-title {
            display: inline-block;
            max-width: 26%;
            width: auto;
          }
        `;
        iframeDocument.head.appendChild(styleElement);
      }

    }

  };
  </script>

  <style scoped>
  .bookingIframe {
    background: transparent;
    max-width: 50%;
    }

    @media (width <= 800px) {
        .bookingIframe {
        background: transparent;
        max-width: 100%;
        }
    }
  </style>
