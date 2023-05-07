<script>
import {store} from "../data/store.js";
export default {
  name: "Header",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <!-- Header -->
  <header class="position-fixed w-100">

    <!-- Container -->
    <div class="container-fluid px-5 d-flex w-100 h-100 justify-content-between align-items-center">
      <img class="h-75" src="img/logo-boolflix.png" alt="">

      <!-- Container Input -->
      <div class="pg-input-container d-flex">
        <input
          v-model="store.movieTitleToSearch"
          type="text"
          class="form-control me-2"
          placeholder="Cerca un film"
          @keyup.enter="$emit('searchMovie'), $emit('searchSeries'), store.movieTitleToSearch = ''">
        <button class="btn btn-danger" @click="$emit('searchMovie'), $emit('searchSeries') ,store.movieTitleToSearch= ''">Search</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 80px;
    background-color: #000;
    box-shadow: 10px 0 10px rgba(#000, 0.8);
    overflow: hidden;
    z-index: 99999;
  }
</style>