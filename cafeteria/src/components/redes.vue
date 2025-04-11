<template>
  <div class="contacto-wrapper">
    <div class="tarjeta-redes p-6">
      <h2 class="titulo">¡Síguenos en redes sociales!</h2>
      
      <div class="redes-contenido">
        <div class="red-item">
          <i class="bi bi-facebook"></i>
          <span>@CafeDelSol</span>
        </div>

        <div class="red-item">
          <i class="bi bi-instagram"></i>
          <span>@CafeDelSol</span>
        </div>

        <div class="red-item">
          <i class="bi bi-tiktok"></i>
          <span>@CafeDelSol</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarjetaRedes',
}
</script>

<style scoped>
.contacto-wrapper {
  background-image: url('https://aprende.com/wp-content/uploads/2022/08/como-identificar-al-publico-de-una-cafeteria.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  backdrop-filter: brightness(0.8);
}

.tarjeta-redes {
  background-color: rgba(25, 18, 18, 0.85);
  color: #fdf6e3;
  max-width: 420px;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  padding: 2rem;
  text-align: center;
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #facc15;
  text-shadow: 1px 1px 4px #000;
}

.redes-contenido > .red-item {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.redes-contenido > .red-item i {
  font-size: 1.8rem;
  transition: transform 0.3s ease;
}

.redes-contenido > .red-item:hover {
  transform: scale(1.05);
}

.redes-contenido > .red-item:hover i.bi-facebook {
  color: #1877f2;
  text-shadow: 0 0 8px #1877f2;
}

.redes-contenido > .red-item:hover i.bi-instagram {
  color: #e1306c;
  text-shadow: 0 0 8px #e1306c;
}

.redes-contenido > .red-item:hover i.bi-tiktok {
  color: #fff;
  text-shadow: 0 0 8px #ff0050;
}
</style>
