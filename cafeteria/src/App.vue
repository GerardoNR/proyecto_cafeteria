<script>
import Carousel from "./components/Carousel.vue";
export default {
  name: "App",
  components: {
    Carousel,
  },
};
</script>

<template>
  <div class="app">
    <header>
      <h1>Bienvenidos a Café del Sol</h1>
      <p>¡El mejor lugar para disfrutar un café y buena compañía!</p>
    </header>
   <!-- Navegador web  -->
   <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Carousel />
    <router-view />
  </div>
</template>

<style>
header{
  background-color: black;
  color: #FFF;
  text-align: center;
  width: auto;
  height: 100px;
}
.app{
  background-color: black;
}

</style>