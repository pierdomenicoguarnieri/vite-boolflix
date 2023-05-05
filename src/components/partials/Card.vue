<script>
export default {
  name: "Card",
  props:{
    image: String,
    originalTitle: String,
    translatedTitle: String,
    language: String,
    rating: Number
  },
  methods:{

  }
}
</script>

<template>
  <div class="col mb-5">
    <div class="pg-card d-flex flex-column">
      <div class="pg-img-container">
        <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle" :title="originalTitle">
        <img v-else src="img/no-image.jpg" :alt="originalTitle" :title="originalTitle">
      </div>
      <h1>Titolo originale: {{originalTitle}}</h1>
      <h2>Titolo italiano: {{translatedTitle}}</h2>
      <div class="pg-language-conteiner d-flex">
        <span>Lingua:</span>
        <img :src="`img/flags/language-${language}.svg`" class="ms-2" :alt="language" :title="language">
      </div>
      <div class="pg-votes-container d-flex align-items-center">
        <span class="me-2">Media voti:</span>
        <span v-for="star in rating" :key="star"><i class="fa-solid fa-star" style="color: #f5c211;"></i></span>
        <span v-for="starEmpty in (5-rating)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col{
    .pg-card{
      color: white;
      .pg-img-container{
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: contain;
        img{
        width: 100%;
        height: 100%;
        }
      }
      .pg-language-conteiner{
        img{
          width: 30px;
        }
      }
    }
  }
</style>