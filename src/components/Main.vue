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

      <h1 class="text-white" v-if="store.resultMoviesArray.length === 0">Popular Movies</h1>
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
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"/>
          </swiper-slide>
      </swiper>

      <h1 class="text-white" v-if="store.resultMoviesArray.length === 0">Top Rated</h1>
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
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"/>
          </swiper-slide>
      </swiper>

      <h1 class="text-white" v-if="store.resultMoviesArray.length > 0">Movies</h1>
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
            :rating="Math.ceil(movie.vote_average/2)"
            :originalRating="(movie.vote_average/2)"/>
          </swiper-slide>
      </swiper>

      <h1 class="text-white" v-if="store.resultSeriesArray.length > 0">Serie TV</h1>
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
            :rating="Math.ceil(serie.vote_average/2)"
            :originalRating="(serie.vote_average/2)"/>
          </swiper-slide>
      </swiper>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "swiper/swiper.css";
</style>