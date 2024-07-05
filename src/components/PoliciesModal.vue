<template>
  <b-modal ref="policiesModal" hide-footer title="Políticas de Ocupación y Desocupación" class="custom-modal">
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
  </b-modal>
</template>

<script>
export default {
  name: 'PoliciesModal',
  methods: {
    show() {
      this.$refs.policiesModal.show();
    },
    hide() {
      this.$refs.policiesModal.hide();
    }
  }
}
</script>

<style scoped>
.custom-modal .modal-title {
  font-size: 1.5rem;
  color: #343a40;
}

.custom-modal .content {
  font-size: 1rem;
  color: #343a40;
}

.custom-modal ul {
  list-style-type: disc;
  padding-left: 20px;
}

.custom-modal ul li {
  margin-bottom: 10px;
}
</style>
