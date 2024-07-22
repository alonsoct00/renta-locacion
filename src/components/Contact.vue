<template>
  <section class="section" id="contact">
    <div class="container">
      <h1 class="title">{{ $t('contact.title') }}</h1>
      <div class="content">
        <div class="contact-info">
          <p><strong>{{ $t('contact.address') }}</strong> Av. de las Granjas 538, Santo Tomas, Azcapotzalco, 02020 Ciudad de México, CDMX</p>
          <p><strong>{{ $t('contact.phone') }}</strong> +123 456 7890</p>
          <p><strong>{{ $t('contact.email') }}</strong> contacto@ejemplo.com</p>
          <p><strong>{{ $t('contact.wifi') }}</strong> Wifi-1234 ({{ $t('contact.wifiPassword') }}: 5678)</p>
        </div>
      </div>
    </div>
    <div class="map-container">
      <MapView />
    </div>
  </section>
</template>

<script>
import MapView from "@/components/MapView.vue";
export default {
  components: {MapView},
  name: 'ContactSection'
}
</script>

<style scoped>
.section {
  padding: 80px 0; /* Espaciado interno */
  background-color: #f9f9f9; /* Color de fondo */
  text-align: center;
}

.title {
  color: #333; /* Color del título */
  margin-bottom: 40px; /* Espaciado inferior */
}

.container {
  max-width: 800px; /* Ancho máximo del contenido */
  margin: 0 auto; /* Centrar el contenido */
}

.content {
  margin-bottom: 40px; /* Espaciado inferior */
}

.contact-info {
  background-color: #fff; /* Color de fondo del área de información */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra ligera */
  text-align: left; /* Alinear texto a la izquierda */
}

.contact-info p {
  margin: 10px 0; /* Espaciado entre párrafos */
}

.contact-info strong {
  color: #333; /* Color del texto fuerte (negrita) */
}

.map-container {
  width: 100%;
  height: 500px;
  margin-top: 40px; /* Espaciado superior */
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px; /* Espaciado interno en dispositivos móviles */
  }

  .map-container {
    height: 300px; /* Altura del mapa en dispositivos móviles */
  }
}
</style>
