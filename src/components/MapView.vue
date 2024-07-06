<template>
    <div>
      <GmapMap
        :center="center"
        :zoom="15"
        style="width: 100%; height: 500px"
      >
        <GmapMarker :position="center"></GmapMarker>
      </GmapMap>
    </div>
  </template>

  <script>
  export default {
    name: 'MapView',
    data() {
      return {
        center: { lat: 40.7128, lng: -74.0060 }, // Cambia esto a la latitud y longitud de tu apartamento
      };
    },
  };
  </script>

  <style scoped>
  /* Puedes agregar estilos personalizados aquí si lo deseas */
  </style>
