<template>
    <div>
      <b-button variant="primary" @click="showModal">Open PDF</b-button>

      <b-modal :id="modalId" title="PDF Document" size="lg" hide-footer>
        <div ref="pdfContainer" class="pdf-container"></div>
      </b-modal>
    </div>
  </template>

  <script>
  import PDFObject from 'pdfobject';

  export default {
    name: 'PdfModal',
    props: {
      pdfUrl: {
        type: String,
        required: true
      },
      modalId: {
        type: String,
        default: 'pdf-modal'
      }
    },
    methods: {
      showModal() {
        this.$bvModal.show(this.modalId);
        this.loadPdf();
      },
      loadPdf() {
        PDFObject.embed(this.pdfUrl, this.$refs.pdfContainer);
      }
    }
  }
  </script>

  <style scoped>
  .pdf-container {
    width: 100%;
    height: 500px;
  }
  </style>