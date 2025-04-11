<template>
  <div class="contacto-wrapper">
    <div class="formulario-contacto p-6 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-4 text-white text-center">Registro de puntos por café</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">
            <i class="bi bi-person me-2"></i>Nombre:
          </label>
          <input v-model="name" type="text" class="input-field" />
        </div>

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">
            <i class="bi bi-envelope me-2"></i>Correo electrónico:
          </label>
          <input v-model="email" type="email" class="input-field" />
        </div>

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">
            <i class="bi bi-telephone me-2"></i>Teléfono:
          </label>
          <input v-model="telefono" type="tel" class="input-field" />
        </div>

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">
            <i class="bi bi-cup-hot me-2"></i>Tipo de café:
          </label>
          <input v-model="tipoCafe" type="text" class="input-field" placeholder="Ej: Espresso, Capuchino..." />
        </div>

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">
            <i class="bi bi-hash me-2"></i>Cantidad:
          </label>
          <input v-model.number="cantidadCafe" type="number" min="1" class="input-field" />
        </div>

        <div class="text-center mt-6">
          <button type="submit" class="btn-registrar">
            <i class="bi bi-check-circle me-2"></i>
            Registrar compra
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroCafe',
  data() {
    return {
      name: '',
      email: '',
      telefono: '',
      tipoCafe: '',
      cantidadCafe: 1,
      puntosPorCafe: 10
    };
  },
  methods: {
    submitForm() {
      const puntosGanados = this.cantidadCafe * this.puntosPorCafe;
      alert(`${this.name} ha registrado ${this.cantidadCafe} ${this.tipoCafe}(s). Has ganado ${puntosGanados} puntos. ¡Gracias por tu compra!`);
    }
  }
}
</script>

<style scoped>
.contacto-wrapper {
  background-image: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.formulario-contacto {
  background-color: rgba(75, 46, 46, 0.9);
  color: #fdf6e3;
  max-width: 500px;
  width: 100%;
}

.input-field {
  width: 100%;
  background-color: #fdf6e3;
  border: none;
  border-radius: 0.375rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem;
  color: #4b2e2e;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 0 2px #facc15;
}

.btn-registrar {
  background-color: #38a169;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: background-color 0.3s ease;
}

.btn-registrar:hover {
  background-color: #2f855a;
}
</style>

