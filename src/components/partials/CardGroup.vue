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
    <swiper-slide v-for="card in array" :key="card.id">
      <Card
        :image="card.poster_path"
        :originalTitle="card.original_title || card.original_name"
        :translatedTitle="card.title || card.name"
        :language="card.original_language"
        :rating="Math.ceil(card.vote_average/2)"
        :originalRating="(card.vote_average/2)"
        :id="card.id"
        :isMovie="isMovie"
        @getApiInfos="getInfos"/>
      </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>

</style>