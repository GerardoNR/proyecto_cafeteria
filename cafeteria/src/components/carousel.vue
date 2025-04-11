<template>
  <div class="carousel-container">
    <header>
      <h1>Bienvenidos a Café del Sol</h1>
      <p>¡El mejor lugar para disfrutar un café y buena compañía!</p>
    </header>

    <div id="carouselExampleIndicators" class="carousel slide carousel-fade h-100">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner h-100">
        <div class="carousel-item active h-100">
          <img src="https://www.frais-notaire.fr/wp-content/uploads/2024/01/1705624046_changement-daffectation-dun-local-commercial-modalites-et-reglementations-1.jpg" class="d-block w-100 h-100" alt="Imagen 1">
        </div>
        <div class="carousel-item h-100">
          <img src="https://th.bing.com/th/id/OIP.z47V2hPGeH3mGC51HxOBRgHaE7?rs=1&pid=ImgDetMain" class="d-block w-100 h-100" alt="Imagen 2">
        </div>
        <div class="carousel-item h-100">
          <img src="https://brewmelikethat.com/wp-content/uploads/2023/11/coffee-accessories.jpg" class="d-block w-100 h-100" alt="Imagen 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style>
html, body, .carousel-container {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
}

.carousel-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: black;
  text-align: center;
  padding: 20px 0;
}

.carousel-inner,
.carousel-item,
img {
  height: calc(100vh - 100px); /* Descuenta la altura del header */
}

img {
  object-fit: cover;
  width: 100%;
}
</style>

