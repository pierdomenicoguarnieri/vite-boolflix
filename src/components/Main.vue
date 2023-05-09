<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import {store} from "../data/store.js";
  import Card from "./partials/Card.vue";
  import Modal from "./partials/Modal.vue";
  import CardGroup from './partials/CardGroup.vue';
  import Loading from "./partials/Loading.vue";

  export default {
    name: "Main",
    components: {
      Swiper,
      SwiperSlide,
      Card,
      Modal,
      CardGroup,
      Loading
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
  <main class="d-flex justify-content-center align-items-center">
    <Loading v-if="store.isLoading"/>
    <div class="container py-3" v-else>

      <CardGroup
        :array="store.results['popularMovies']"
        :isMovie="true"
        :show="!store.search"
        title="Popular Movies"
        @getInfosApi="getInfos" />

      <CardGroup
        :array="store.results['popularSeries']"
        :isMovie="false"
        :show="!store.search"
        title="Popular Series"
        @getInfosApi="getInfos" />

      <CardGroup
        :array="store.results['topRatedMovies']"
        :isMovie="true"
        :show="!store.search"
        title="Top Rated Movies"
        @getInfosApi="getInfos" />
      
      <CardGroup
        :key="genre.id"
        v-for="genre in store.results['movieGenre']"
        :array="store.results[`movie${genre.name}`]"
        :isMovie="true"
        :show="!store.search"
        :title="`Ultimi film nella categoria ${genre.name}`"
        @getInfosApi="getInfos" />

      <CardGroup
        :array="store.results['searchMovies']"
        :isMovie="true"
        :show="store.search"
        title="Searched Movies"
        @getInfosApi="getInfos" />

      <CardGroup
        :array="store.results['searchSeries']"
        :isMovie="false"
        :show="store.search"
        title="Searched Series"
        @getInfosApi="getInfos" />

    </div>

    
    <!-- Modale -->
    <Modal
      :title="store.resultDetails.original_title"
      :translatedTitle="store.resultDetails.title"
      :titleSerie="store.resultDetails.original_name"
      :translatedTitleSerie="store.resultDetails.name"
      :image="store.resultDetails.backdrop_path"
      :overview="store.resultDetails.overview"
      :genres="store.resultDetails.genres"
      :cast="store.resultCredits.cast"/>
    </main>
</template>

<style lang="scss" scoped>

  main{
    padding-top: 80px;
    overflow: scroll;
  }
</style>