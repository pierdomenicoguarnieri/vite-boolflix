<script>
import {store} from "../data/store.js";
import Card from "./partials/Card.vue";
export default {
  name: "Main",
  components:{
    Card
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>
    <div class="container py-5">
      <h1 class="text-white" v-if="store.resultMoviesArray.length > 0">Movies</h1>
      <div class="row row-cols-5">
        <Card
          v-for="movie in store.resultMoviesArray"
          :key="movie.id"
          :image="movie.poster_path"
          :originalTitle="movie.original_title"
          :translatedTitle="movie.title"
          :language="movie.original_language"
          :rating="Math.ceil(movie.vote_average/2)"
          :originalRating="(movie.vote_average/2)"/>
      </div>
      <h1 class="text-white" v-if="store.resultSeriesArray.length > 0">Serie TV</h1>
      <div class="row row-cols-5">
        <Card
          v-for="serie in store.resultSeriesArray"
          :key="serie.id"
          :image="serie.poster_path"
          :originalTitle="serie.original_name"
          :translatedTitle="serie.name"
          :language="serie.original_language"
          :rating="Math.ceil(serie.vote_average/2)"
          :originalRating="(serie.vote_average/2)"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>