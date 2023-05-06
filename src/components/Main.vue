<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import {store} from "../data/store.js";
  import Card from "./partials/Card.vue";

  import 'swiper/css';

  export default {
    name: "Main",
    components: {
      Swiper,
      SwiperSlide,
      Card
    },
    data(){
      return{
        store
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  }
</script>

<template>
  <main>
    <div class="container py-5">

      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length === 0">
        <h1 class="text-white me-2">Popular Movies</h1>
        <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div>
      </div>
      <swiper
        v-if="store.resultMoviesArray.length === 0"
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="movie in store.resultPopularArray" :key="movie.id">
          <Card
            :image="movie.poster_path"
            :originalTitle="movie.original_title"
            :translatedTitle="movie.title"
            :language="movie.original_language"
            :overview="movie.overview"
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"
            :id="movie.id"/>
          </swiper-slide>
      </swiper>

      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length === 0">
        <h1 class="text-white me-2">Top Rated</h1>
        <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div>
      </div>
      <swiper
        v-if="store.resultMoviesArray.length === 0"
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="movie in store.resultTopRated" :key="movie.id">
          <Card
            :image="movie.poster_path"
            :originalTitle="movie.original_title"
            :translatedTitle="movie.title"
            :language="movie.original_language"
            :overview="movie.overview"
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"
            :id="movie.id"/>
          </swiper-slide>
      </swiper>

      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length > 0">
        <h1 class="text-white me-2">Searched Movies</h1>
        <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div>
      </div>
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="movie in store.resultMoviesArray" :key="movie.id">
          <Card
            :image="movie.poster_path"
            :originalTitle="movie.original_title"
            :translatedTitle="movie.title"
            :language="movie.original_language"
            :overview="movie.overview"
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"
            :id="movie.id"/>
          </swiper-slide>
      </swiper>

      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultSeriesArray.length > 0">
        <h1 class="text-white me-2">Searched TV Series</h1>
        <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div>
      </div>
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="serie in store.resultSeriesArray" :key="serie.id">
          <Card
            :image="serie.poster_path"
            :originalTitle="serie.original_name"
            :translatedTitle="serie.name"
            :language="serie.original_language"
            :overview="serie.overview"
            :rating="Math.ceil(serie.vote_average/2)"
            :originalRating="(serie.vote_average/2)"
            :id="serie.id"/>
          </swiper-slide>
      </swiper>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "swiper/swiper.css";
</style>