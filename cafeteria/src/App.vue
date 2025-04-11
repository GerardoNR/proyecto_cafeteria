<script>
import router from './router';
</script>

<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg cafebar">
        <div class="container-fluid">
          <a class="navbar-brand text-light fw-bold" href="#">
            <i class="bi bi-cup-hot-fill me-2"></i>Café del Sol
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/carousel" class="nav-link text-light">Bienvenida</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/formulario" class="nav-link text-light">Cupones</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/mapa" class="nav-link text-light">Ubicación</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/redes" class="nav-link text-light">Redes Sociales</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/menu" class="nav-link text-light">Menu</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.cafebar {
  background-color: #4b2e2e !important; /* Marrón oscuro tipo café */
  padding: 0.8rem 1.2rem;
  border-bottom: 4px solid #d2b48c; /* Beige tipo madera */
  font-family: 'Georgia', serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}




.nav-link {
  font-size: 1rem;
  margin-left: 1rem;
  transition: color 0.3s;
  text-decoration: none !important;
}

.nav-link:hover {
  color: #facc15 !important; /* Amarillo cálido al pasar el mouse */
}
</style>

