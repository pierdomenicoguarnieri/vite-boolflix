<script>
import {store} from "../../data/store";
export default {
  name: "Card",
  props:{
    image: String,
    originalTitle: String,
    translatedTitle: String,
    language: String,
    overview: String,
    rating: Number,
    originalRating: Number,
    id: Number,
    isMovie: Boolean
  },
  data(){
    return{
      textHeight: 0,
      store
    }
  },
  methods:{
    getHeight(id){
      const textContainer = document.getElementById(id);
      this.textHeight = textContainer.offsetHeight;
    },
    callApiInfos(id, flag){
      store.idInfos = id;
      flag ? store.type = "movie" : store.type = "tv";
      this.$emit("getApiInfos");
    }
  }
}
</script>

<template>
  <div class="pg-card d-flex flex-column position-relative mb-5" @mouseenter="getHeight(id)">

    <!-- Container immagine -->
    <div class="pg-img-container rounded-3 overflow-hidden">
      <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle" :title="originalTitle">
      <img v-else src="img/no-image.jpg" :alt="originalTitle" :title="originalTitle">
    </div>

    <!-- Contenitore del testo -->
    <div class="pg-card-text w-100 h-100 position-absolute p-2">

      <div class="pg-upper-text-container" :id="id">

        <!-- Contenitore dei titoli -->
        <div class="pg-titles-container">
          <span class="pg-original-title"><span class="text-uppercase">{{language}}:</span> {{originalTitle}}</span>
          <span class="pg-translated-title">IT: {{translatedTitle}}</span>
        </div>

        <!-- Contenitore della lingua -->
        <div class="pg-language-container d-flex">
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
              <i class="fa-solid fa-star" style="color: #c01c28;"></i>
            </span>
          </div>

          <!-- Half Star with class condition -->
          <span v-if="rating > 0">
            <i
              class="fa-solid"
              :class="{'fa-star-half-stroke' : originalRating !== rating, 'fa-star': originalRating === rating}"
              style="color: #c01c28;"></i>
          </span>

          <!-- Empy Star -->
          <span
            v-for="starEmpty in (5-rating)"
            :key="starEmpty">
            <i class="fa-regular fa-star"></i>
          </span>
          <span class="ms-1">({{originalRating.toFixed(2)}})</span>
        </div>

        <div class="pg-modal-container">
          <button type="button" class="btn btn-danger" @click="store.showModal = !store.showModal, callApiInfos(id, isMovie)">Film Infos</button>
        </div>
      </div>
      <!-- Overview Container -->
      <div class="pg-overview-container overflow-auto mt-2 mb-5" :style="{maxHeight: `calc(100% - ${this.textHeight}px)`}" v-if="overview !== ''">
        <span>Overview:</span>
        <p class="pe-3">{{overview}}</p>
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
        img{
        width: 100%;
        height: 100%;
        transition: all .5s;
        object-fit: cover !important;
        }
      }
      .pg-card-text{
        top: 100%;
        transition: all .5s;
        .pg-titles-container{
          .pg-original-title{
            font-weight: 600;
            font-size: 1.15rem;
            display: block;
            max-height: 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow : ellipsis;
            transition: all .5s;
            &:hover{
              max-height: 200px;
              white-space: normal;
            }
          }
          .pg-translated-title{
            font-weight: 500;
            font-size: 1.1rem;
            display: block;
            max-height: 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow : ellipsis;
            transition: all .5s;
            &:hover{
              max-height: 200px;
              white-space: normal;
            }
          }
        }
        .pg-language-container{
          img{
            width: 30px;
          }
        }
        .pg-overview-container{
          p{
            font-size: 0.85rem;
          }
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