<template>
  <div class="contacto-wrapper">
    <div class="mapa-container p-6 rounded-lg shadow-lg text-center">
      <h2 class="text-3xl font-bold mb-4 text-white">¿Dónde estamos?</h2>
      <div class="mapa-wrapper position-relative">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-mapa-ciudad-dibujada-mano_23-2149570002.jpg"
          alt="Mapa ubicación"
          class="mapa-img"/>
        
        <div class="ubicacion-marcador">
          <i class="bi bi-geo-alt-fill"></i>
          <span class="text">Aquí estamoss</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UbicacionCafe'
};
</script>

<style scoped>
.contacto-wrapper {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y2U8wwSbeRBBD6bG8T3BAg3VAMtfKSBT4A&s');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.mapa-container {
  background-color: rgba(75, 46, 46, 0.9);
  color: #fdf6e3;
  max-width: 600px;
  width: 100%;
}

.mapa-wrapper {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
}

.mapa-img {
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}

.ubicacion-marcador {
  position: absolute;
  top: 13%; /* Ajusta según el punto del mapa */
  left: 10%;
  transform: translate(-50%, -50%);
  color: #0f0f0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  
}


.ubicacion-marcador i {
  font-size: 1.4rem;
  color: #f43f5e;
}
</style>

  