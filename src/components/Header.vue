<script>
import {store} from "../data/store.js";
export default {
  name: "Footer",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid px-5 d-flex w-100 h-100 justify-content-between align-items-center">
      <img class="h-75" src="img/logo-boolflix.png" alt="">
      <div class="pg-input-container d-flex">
        <input
          v-model="store.movieTitleToSearch"
          type="text"
          class="form-control me-2"
          placeholder="Cerca un film"
          @keyup.enter="$emit('searchMovie')">
        <button class="btn btn-danger" @click="$emit('searchMovie')">Search</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 80px;
    background-color: #000;
    box-shadow: 10px 0 10px rgba(#000, 0.8);
  }
</style>