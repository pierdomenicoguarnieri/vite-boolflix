<script>
  import {store} from "../../data/store.js";
  import Loading from "./Loading.vue";
export default {
  name:"Modal",
  components:{
    Loading
  },
  data(){
    return{
      store,
      numberOfCast: 5,
      flag: true
    }
  },
  props:{
    title: String,
    translatedTitle: String,
    titleSerie: String,
    translatedTitleSerie: String,
    releaseDate: String,
    image: String,
    genres: Array,
    rate: Number,
    cast: Array,
  }
}
</script>

<template>
  <div class="pg-modal-wrapper d-flex align-items-center justify-content-center overflow-scroll" v-if="store.showModal" @click="store.showModal = !store.showModal">
    <Loading v-if="store.isLoading"/>
    <div class="pg-modal overflow-hidden rounded-2 bg-dark text-white mb-2" v-else @click.stop="store.showModal = true">
      <div class="pg-modal-header position-relative">
        <div class="pg-modal-header-infos d-flex justify-content-between w-100 h-100 position-absolute p-3 top-0 left-0">
          <div class="pg-title-container d-flex flex-column">
            <h1 v-show="title != null">{{title}}</h1>
            <h1 v-show="titleSerie!= null">{{titleSerie}}</h1>
            <h2 v-show="translatedTitle != null">{{translatedTitle}}</h2>
            <h2 v-show="translatedTitleSerie != null">{{translatedTitleSerie}}</h2>
          </div>
          <div class="btn-container">
            <button type="button" class="btn btn-dark rounded-circle" @click.stop="store.showModal = !store.showModal"><i class="fa-solid fa-x"></i></button>
          </div>
        </div>
        <img class="position-absolute top-0 left-0" :src="`https://image.tmdb.org/t/p/original${image}`" :alt="title">
      </div>

      <div class="pg-modal-body p-3">
        <div class="pg-modal-genres">
          <h4>Generi:</h4>
          <ul class="list-unstyled d-flex">
            <li class="px-2 py-1 rounded-3 bg-danger me-2" v-for="genre in genres" :key="genre.id">{{ genre.name }}</li>
          </ul>
        </div>

        <div class="pg-modal-cast">
          <h4>Cast:</h4>
          <div class="row row-cols-5">
            <div class="col mb-4 text-center" v-for="(actor, index) in cast" :key="actor.id" v-show="index <= numberOfCast - 1">
              <div class="pg-cast-image mb-2">
                <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" :alt="actor.name" :title="actor.name" v-show="actor.profile_path != null">
                <img src="img/actor.png" :alt="actor.name" :title="actor.name" v-show="actor.profile_path == null">
              </div>
              <h5>{{actor.name}}</h5>
              <h6>Nel ruolo di: "{{actor.character}}"</h6>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pg-modal-wrapper{
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  .pg-modal{
    position: sticky;
    top: 0;
    margin-top: 80px;
    width: 60%;
    .pg-modal-header{
      height: 400px;
      overflow: hidden;
      .pg-modal-header-infos{
        z-index: 2;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(255,255,255,0) 75%);
      }
      img{
        z-index: 1;
        width: 100%;
      }
    }
  }
}
</style>