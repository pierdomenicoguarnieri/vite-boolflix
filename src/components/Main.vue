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
      <div class="row row-cols-5">
        <Card
          v-for="movie in store.resultMovieArray"
          :key="movie.id"
          :image="movie.poster_path"
          :originalTitle="movie.original_title"
          :translatedTitle="movie.title"
          :language="movie.original_language"
          :rating="movie.vote_average" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>