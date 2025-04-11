<template>
    <div class="gallery-container" style="background-color: #7B5544;">
      <h1 class="title" style="font-family: 'Times New Roman', Times, serif; color: white;">GALERÍA DE LA CAFETERÍA</h1>
  
      <div class="gallery-grid">
        <div v-for="(image, index) in images" :key="index" class="gallery-item">
          <img :src="image.src" :alt="image.alt" @click="openModal(image)" />
          <p class="image-title">{{ image.alt }}</p>
        </div>
      </div>
  
      <div v-if="selectedImage" class="modal" @click="closeModal">
        <div class="modal-content">
          <img :src="selectedImage.src" :alt="selectedImage.alt" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: 'https://th.bing.com/th/id/OIP.IFKaWYw1UaUNVmnCZQRs-wHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7', alt: 'CAFÉ CON ARTE LATTE'},
          { src: 'https://th.bing.com/th/id/OIP.6l1zCP4fAtXOuLRTVvhilgHaFc?rs=1&pid=ImgDetMain', alt: 'INTERIOR DE LA CAFETERÍA' },
          { src: 'https://th.bing.com/th/id/OIP.RozZPWhM0FGcFvlBJQm-VQHaEx?w=310&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7', alt:'POSTRES ARTESANALES'},
          { src: 'https://th.bing.com/th/id/OIP.dEVOkjeAG4z-lSIa09qxFgHaEK?rs=1&pid=ImgDetMain', alt: 'CAFÉ FRÍO CON CREMA' },
          { src: 'https://th.bing.com/th/id/OIP.gaJHqG5KUP0EWWJ0jdsLrwHaFj?rs=1&pid=ImgDetMain', alt: 'MESAS RÚSTICAS CON PLANTAS'},
          { src: 'https://th.bing.com/th/id/OIP.wTKFpuBh1v4vZ-fG1TkUeAHaE7?rs=1&pid=ImgDetMain', alt: 'BARISTA PREPARANDO CAFÉ'}
        ],
        selectedImage: null
      };
    },
    methods: {
      openModal(image) {
        this.selectedImage = image;
      },
      closeModal() {
        this.selectedImage = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .gallery-container {
    text-align: center;
    padding: 20px;
  }
  
  .title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .gallery-item {
    text-align: center;
  }
  
  .gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s;
  }
  
  .gallery-item img:hover {
    transform: scale(1.05);
  }
  
  .image-title {
    margin-top: 5px;
    font-size: 1.1em;
    font-weight: bold;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 10px;
  }
  .image-title {
    color: white;
  }
  
  </style>
