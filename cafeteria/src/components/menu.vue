<template>
    <div class="cafeteria-cards">
      <div class="card" v-for="item in menuItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="card-image" />
        <h3 class="card-title">{{ item.name }}</h3>
        <p class="card-description">{{ item.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CafeteriaCards',
    data() {
      return {
        menuItems: [
          {
            id: 1,
            name: 'Café Latte',
            description: 'Un delicioso café latte con leche espumosa.',
            image: 'https://th.bing.com/th/id/OIP.4KAM6OXq5dxqjN8KwksURQHaGQ?w=213&h=180&c=7&r=0&o=5&pid=1.7',
          },
          {
            id: 2,
            name: 'Cappuccino',
            description: 'Café expreso cubierto con espuma de leche espesa.',
            image: 'https://th.bing.com/th/id/OIP.g108wW-nRM0B_tqRJa6wJgAAAA?w=289&h=193&c=7&r=0&o=5&pid=1.7',
          },
          {
            id: 3,
            name: 'Té Verde',
            description: 'Té verde fresco y saludable.',
            image: 'https://th.bing.com/th/id/OIP.kLYE97-rmNRYjumfeSR5ngHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7',
          },
          {
            id: 4,
            name: 'Pastelito de Chocolate',
            description: 'Un delicioso pastelito relleno de chocolate.',
            image: 'https://th.bing.com/th/id/OIP.7f9rVrolZu8IPgObplwy7wHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7',
          },
          {
            id: 5,
            name: 'Espresso',
            description: 'Un espresso intenso y aromático, perfecto para despertar.',
            image: 'https://www.cafescandelas.com/uploads/thumbnail/El_perfecto_cafe_espresso_620X339_s1.jpg?umk=c8e693ea8595248d1bd008b0da920a240bb11cf1',
          },
          {
            id: 6,
            name: 'Croissant',
            description: 'Croissant recién horneado con una textura crujiente.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfP3r6STKYUMikwJHPQPVMZBlj5s5ncx-lWw&s',
          },
          {
            id: 7,
            name: 'Muffin de Arándanos',
            description: 'Muffin suave con trozos de arándano fresco.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iPkfTcJ-5GG-5VOVniPPkfZiYKErOHwUPWxCdH7Qr_ABrvznOau6dgQ82NxlE-UHTN0&usqp=CAU',
          },
          {
            id: 8,
            name: 'Chai Latte',
            description: 'Mezcla de té negro, especias y leche cremosa.',
            image: 'https://cafesmyway.com/wp-content/uploads/2024/04/cafe-chai.webp',
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .cafeteria-cards {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .card {
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    text-align: center;
    font-size: 1.2rem;
    margin: 10px 0;
    color: #4b2e2e;
  }
  
  .card-description {
    padding: 0 10px 10px;
    font-size: 1rem;
    color: #666;
    text-align: center;
  }
  </style>
  