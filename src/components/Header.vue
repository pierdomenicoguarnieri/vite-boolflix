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
    <div class="container-fluid px-md-5 d-flex w-100 h-100 justify-content-between align-items-center">
      <div class="container-logo w-25 h-100 me-2 me-md-0 py-2 justify-content-start">
        <img class="w-100 h-100" src="/img/logo-boolflix.png" alt="" @click="$emit('resetPage')">
      </div>

      <!-- Container Input -->
      <div class="pg-input-container d-flex">
        <input
          v-model="store.movieTitleToSearch"
          type="text"
          class="form-control me-2"
          placeholder="Cerca un film"
          @keyup.enter="$emit('searchMovie'), $emit('searchSeries'), store.movieTitleToSearch = '', store.search = true">
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
    .container-logo{
      min-width: 130px;
    }
    img{
      cursor: pointer;
      object-fit: contain;
    }
  }
</style>