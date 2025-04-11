<template>
    <div class="cafe-comments">
      <h2 style="font-family: 'Georgia', serif; font-size: 2rem; color: #8B4513; text-align: center; letter-spacing: 1px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3); margin-bottom: 1rem;">
  COMENTARIOS
</h2>

      <div class="comment-form">
        <h3 class="title">Deja tu comentario</h3>
        <form @submit.prevent="addComment">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="newComment.name" required placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label for="comment">Comentario:</label>
            <textarea id="comment" v-model="newComment.text" required placeholder="¿Qué opinas de nuestra cafetería?" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>Valoración:</label>
            <div class="rating">
              <span v-for="star in 5" :key="star" @click="setRating(star)" :class="{ 'active': star <= newComment.rating }">★</span>
            </div>
          </div>
          <button type="submit" class="submit-btn">Enviar comentario</button>
        </form>
      </div>
  
      <!-- Lista de comentarios -->
      <div class="comments-list">
        <h3>Comentarios recientes ({{ comments.length }})</h3>
        <div v-for="(comment, index) in comments" :key="index" class="comment-item">
          <div class="comment-header">
            <span class="comment-author"><strong>{{ comment.name }}</strong></span>
            <span class="comment-date">{{ formatDate(comment.date) }}</span>
            <span class="comment-rating">
              <span v-for="star in 5" :key="star" :class="{ 'active': star <= comment.rating }">★</span>
            </span>
          </div>
          <p class="comment-text">{{ comment.text }}</p>
          <button @click="removeComment(index)" class="delete-btn">Eliminar</button>
        </div>
        <p v-if="comments.length === 0" class="no-comments">Aún no hay comentarios. ¡Sé el primero en opinar!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CafeComments',
    data() {
      return {
        newComment: { name: '', text: '', rating: 0, date: null },
        comments: []
      };
    },
    created() {
      const savedComments = localStorage.getItem('cafeComments');
      if (savedComments) {
        this.comments = JSON.parse(savedComments);
      }
    },
    methods: {
      addComment() {
        if (!this.newComment.text.trim() || this.newComment.rating === 0) return;
        const comment = { ...this.newComment, date: new Date() };
        this.comments.unshift(comment);
        this.saveComments();
        this.newComment = { name: '', text: '', rating: 0, date: null };
      },
      removeComment(index) {
        this.comments.splice(index, 1);
        this.saveComments();
      },
      setRating(rating) {
        this.newComment.rating = rating;
      },
      saveComments() {
        localStorage.setItem('cafeComments', JSON.stringify(this.comments));
      },
      formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .cafe-comments {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
 
  .comment-form {
    background: linear-gradient(135deg, #3f200e, #74473b);
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .comment-form h3 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"], textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  input[type="text"]:focus, textarea:focus {
    border-color: #572e08;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 117, 140, 0.5);
  }
  
  textarea {
    resize: none;
  }
  

  .rating {
    display: flex;
    justify-content: center;
  }
  
  .rating span {
    font-size: 28px;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .rating span.active {
    color: #ffcc00;
  }
  
  .rating span:hover {
    color: #ff9800;
  }
  

  .submit-btn {
    width: 100%;
    background-color: #aa4d0f;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #912504;
  }
  
  
  .comments-list {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  .comment-item {
    background-color: #fffde7;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px solid #f1f1f1;
  }
  
  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .comment-author {
    font-weight: bold;
  }
  
  .comment-date {
    color: #685858;
    font-size: 0.9em;
  }
  
  .comment-rating span {
    color: #ffc107;
    font-size: 16px;
  }
  
 
  .delete-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s ease;
  }
  
  .delete-btn:hover {
    background-color: #d32f2f;
  }
  
  .no-comments {
    text-align: center;
    color: #777;
    padding: 15px;
    font-size: 16px;
  }
  
  @media (max-width: 600px) {
    .comment-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .comment-author, .comment-date, .comment-rating {
      margin-bottom: 5px;
    }
  }
  </style>