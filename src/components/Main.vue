<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import {store} from "../data/store.js";
  import Card from "./partials/Card.vue";
  import Modal from "./partials/Modal.vue";

  export default {
    name: "Main",
    components: {
      Swiper,
      SwiperSlide,
      Card,
      Modal
    },
    data(){
      return{
        store
      }
    },
    setup() {
      return {
        modules: [Mousewheel, Pagination],
      };
    },
    methods:{
      getInfos(){
        this.$emit("getApiDetails");
      }
    }
  }
</script>

<template>
  <main>
    <div class="container py-3">

      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length === 0 && store.resultSeriesArray.length  === 0">
        <h1 class="text-white me-2">Popular Movies</h1>
        <!-- <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div> -->
      </div>

      <!-- Swiper per i film più popolari -->
      <swiper
        v-if="store.resultMoviesArray.length === 0 && store.resultSeriesArray.length  === 0"
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :breakpoints="{
          '0': {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          '575': {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          '767': {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          '1200': {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          '1400': {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          }"
        :mousewheel="true"
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
            :id="movie.id"
            :isMovie="true"
            @getApiInfos="getInfos"/>
          </swiper-slide>
      </swiper>


      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length === 0 && store.resultSeriesArray.length  === 0">
        <h1 class="text-white me-2">Top Rated</h1>
        <!-- <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div> -->
      </div>
      
      <!-- Swiper per i film più votati -->
      <swiper
        v-if="store.resultMoviesArray.length === 0 && store.resultSeriesArray.length  === 0"
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :breakpoints="{
          '0': {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          '575': {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          '767': {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          '1200': {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          '1400': {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          }"
        :mousewheel="true"
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
            :id="movie.id"
            :isMovie="true"
            @getApiInfos="getInfos"/>
          </swiper-slide>
      </swiper>


      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultMoviesArray.length > 0">
        <h1 class="text-white me-2">Searched Movies</h1>
        <!-- <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div> -->
      </div>

      <!-- Swiper per i film cercati -->
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :breakpoints="{
          '0': {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          '575': {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          '767': {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          '1200': {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          '1400': {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          }"
        :mousewheel="true"
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
            :id="movie.id"
            :isMovie="true"
            @getApiInfos="getInfos"/>
          </swiper-slide>
      </swiper>


      <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="store.resultSeriesArray.length > 0">
        <h1 class="text-white me-2">Searched TV Series</h1>
        <!-- <div class="pg-btn-container">
          <button type="button" class="btn btn-danger me-2">Previous Page</button>  
          <button type="button" class="btn btn-danger">Next Page</button>  
        </div> -->
      </div>
      
      <!-- Swiper per le Serie TV -->
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{ clickable: true,}"
        :breakpoints="{
          '0': {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          '575': {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          '767': {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          '1200': {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          '1400': {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          }"
        :mousewheel="true"
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
            :id="serie.id"
            :isMovie="false"
            @getApiInfos="getInfos"/>
          </swiper-slide>
      </swiper>
    </div>

    <!-- Modale -->
    <Modal
      :title="store.resultDetails.original_title"
      :translatedTitle="store.resultDetails.title"
      :titleSerie="store.resultDetails.original_name"
      :translatedTitleSerie="store.resultDetails.name"
      :image="store.resultDetails.backdrop_path"
      :genres="store.resultDetails.genres"
      :cast="store.resultCredits.cast"/>
    </main>
</template>

<style lang="scss" scoped>
  @import "swiper/swiper.css";
  
  main{
    padding-top: 80px;
    overflow: scroll;
  }
</style>