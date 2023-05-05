<script>
export default {
  name: "Card",
  props:{
    image: String,
    originalTitle: String,
    translatedTitle: String,
    language: String,
    rating: Number,
    originalRating: Number
  },
  methods:{

  }
}
</script>

<template>
  <div class="col mb-5">
    <div class="pg-card d-flex flex-column position-relative">
      <div class="pg-img-container">
        <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle" :title="originalTitle">
        <img v-else src="img/no-image.jpg" :alt="originalTitle" :title="originalTitle">
      </div>
      <div class="pg-card-text w-100 h-100 position-absolute p-2">
        <h3><span class="text-uppercase">{{language}}:</span> {{originalTitle}}</h3>
        <h4>IT: {{translatedTitle}}</h4>
        <div class="pg-language-conteiner d-flex">
          <span>Lingua:</span>
          <img :src="`img/flags/language-${language}.svg`" class="ms-2" :alt="language" :title="language">
        </div>
        <div class="pg-votes-container d-flex align-items-center">
          <span class="me-2">Media voti:</span>
          <span v-for="star in (rating - 1)" :key="star"><i class="fa-solid fa-star" style="color: #f5c211;"></i></span>
          <span><i class="fa-solid" :class="{'fa-star-half-stroke' : originalRating !== rating, 'fa-star': originalRating === rating}" style="color: #f5c211;"></i></span>
          <span v-for="starEmpty in (5-rating)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
          <span class="ms-1">({{originalRating.toFixed(2)}})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col{
    .pg-card{
      color: white;
      overflow: hidden;
      .pg-img-container{
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: contain;
        img{
        width: 100%;
        height: 100%;
        transition: all .5s;
        }
      }
      .pg-card-text{
        top: 100%;
        transition: all .5s;
      }
      .pg-language-conteiner{
        img{
          width: 30px;
        }
      }
      &:hover{
        .pg-img-container{
          img{
            opacity: 40%;
          }
        }
        .pg-card-text{
          top: 0;
        }
      }
    }
  }
</style>