<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import Card from './Card.vue';

  export default {
  name: "CardGroup",
  components: {
      Swiper,
      SwiperSlide,
      Card
    },
    props:{
      array: Array,
      isMovie: Boolean,
      show: Boolean,
      title: String
    },
    setup() {
      return {
        modules: [Mousewheel, Pagination],
      };
    },
    methods:{
      getInfos(){
        this.$emit('getInfosApi');
      }
    }
  }
</script>

<template>
  <div class="pg-swiper-header d-flex py-2 align-items-center" v-if="show">
    <h1 class="text-white me-2">{{title}}</h1>
    <!-- <div class="pg-btn-container">
      <button type="button" class="btn btn-danger me-2">Previous Page</button>  
      <button type="button" class="btn btn-danger">Next Page</button>  
    </div> -->
  </div>

  <!-- Swiper -->
  <swiper
    v-if="show"
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
    <swiper-slide v-for="movie in array" :key="movie.id">
      <Card
        :image="movie.poster_path"
        :originalTitle="movie.original_title"
        :translatedTitle="movie.title"
        :language="movie.original_language"
        :rating="Math.ceil(movie.vote_average/2)"
        :originalRating="(movie.vote_average/2)"
        :id="movie.id"
        :isMovie="isMovie"
        @getApiInfos="getInfos"/>
      </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>

</style>