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
    <div class="pg-card d-flex flex-column position-relative mb-5">

      <!-- Container immagine -->
      <div class="pg-img-container rounded-3 overflow-hidden">
        <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle" :title="originalTitle">
        <img v-else src="img/no-image.jpg" :alt="originalTitle" :title="originalTitle">
      </div>

      <!-- Contenitore del testo -->
      <div class="pg-card-text w-100 h-100 position-absolute p-2">

        <!-- Contenitore dei titoli -->
        <div class="ps titles-container">
          <h3><span class="text-uppercase">{{language}}:</span> {{originalTitle}}</h3>
          <h4>IT: {{translatedTitle}}</h4>
        </div>

        <!-- Contenitore della lingua -->
        <div class="pg-language-conteiner d-flex">
          <span>Lingua:</span>
          <img :src="`img/flags/language-${language}.svg`" class="ms-2" :alt="language" :title="language">
        </div>

        <!-- Contenitore dei voti -->
        <div class="pg-votes-container d-flex align-items-center">
          <span class="me-2">Voti:</span>

          <!-- Full Star -->
          <div v-if="rating > 0">
            <span
              v-for="star in (rating - 1)"
              :key="star">
              <i class="fa-solid fa-star" style="color: #f5c211;"></i>
            </span>
          </div>

          <!-- Half Star with class condition -->
          <span v-if="rating > 0">
            <i
              class="fa-solid"
              :class="{'fa-star-half-stroke' : originalRating !== rating, 'fa-star': originalRating === rating}"
              style="color: #f5c211;"></i>
          </span>

          <!-- Empy Star -->
          <span
            v-for="starEmpty in (5-rating)"
            :key="starEmpty">
            <i class="fa-regular fa-star"></i>
          </span>
          <span class="ms-1">({{originalRating.toFixed(2)}})</span>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
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
            transform: scale(1.1);
          }
        }
        .pg-card-text{
          top: 0;
        }
      }
    }
</style>