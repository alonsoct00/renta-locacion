<template>
  <div class="policies">
    <div class="container mt-5">
      <h1 class="title">Políticas de Ocupación y Desocupación</h1>
      <div class="content">
        <h2>Ocupación</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <h2>Desocupación</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <h2>Normas de la Casa</h2>
        <ul>
          <li>No se permiten fiestas ni eventos.</li>
          <li>Se permite fumar solo en áreas designadas.</li>
          <li>Respetar las horas de silencio de 10:00 PM a 8:00 AM.</li>
        </ul>
        <h2>Política de Cancelación</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliciesSection'
}
</script>

<style scoped>
.policies {
  padding: 20px;
}

.title {
  margin-bottom: 20px;
}

.content h2 {
  margin-top: 20px;
  color: #00d1b2;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}
</style>
