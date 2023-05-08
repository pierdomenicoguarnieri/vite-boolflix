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
  <!-- Modal Wrapper, chiude il modal se ci premi sopra -->
  <div class="pg-modal-wrapper d-flex align-items-center justify-content-center overflow-scroll" v-if="store.showModal" @click="store.showModal = !store.showModal, flag = true, numberOfCast = 5">

    <!-- Loading -->
    <Loading v-if="store.isLoading"/>

    <!-- Modal, interrompe il click precedente, se si preme sul modale non si chiuderà -->
    <div class="pg-modal overflow-hidden rounded-2 bg-dark text-white mb-2" v-else @click.stop="store.showModal = true">

      <!-- Modal header -->
      <div class="pg-modal-header position-relative">

        <!-- Container infos -->
        <div class="pg-modal-header-infos d-flex justify-content-between w-100 h-100 position-absolute p-3 top-0 left-0">

          <!-- Titles container -->
          <div class="pg-title-container d-flex flex-column">
            <h1 v-show="title != null">{{title}}</h1>
            <h1 v-show="titleSerie!= null">{{titleSerie}}</h1>
            <h2 v-show="translatedTitle != null">{{translatedTitle}}</h2>
            <h2 v-show="translatedTitleSerie != null">{{translatedTitleSerie}}</h2>
          </div>

          <!-- Bottone di chiusura -->
          <div class="btn-container">
            <button type="button" class="btn btn-dark rounded-circle p-0" @click.stop="store.showModal = !store.showModal, flag = true, numberOfCast = 5"><i class="fa-solid fa-x"></i></button>
          </div>
        </div>

        <!-- Immagine di sfondo dinamica -->
        <img class="position-absolute top-0 left-0" :src="`https://image.tmdb.org/t/p/original${image}`">
      </div>

      <!-- Modal Body -->
      <div class="pg-modal-body p-3">

        <!-- Container dei generi -->
        <div class="pg-modal-genres">
          <h4>Generi:</h4>
          <ul class="list-unstyled d-flex">
            <li class="px-2 py-1 rounded-3 bg-danger me-2" v-for="genre in genres" :key="genre.id">{{ genre.name }}</li>
          </ul>
        </div>

        <!-- Container del cast -->
        <div class="pg-modal-cast">
          <h4>Cast:</h4>

          <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

            <div class="col mb-4 text-center" v-for="(actor, index) in cast" :key="actor.id" v-show="index <= numberOfCast - 1">
            
              <!-- Container immagine -->
              <div class="pg-cast-image mb-2">
                <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" :alt="actor.name" :title="actor.name" v-show="actor.profile_path != null">

                <!-- Questa immagine viene mostrata se la stringa è nulla -->
                <img src="img/actor.png" :alt="actor.name" :title="actor.name" v-show="actor.profile_path == null">
              </div>

              <h5>{{actor.name}}</h5>
              <h6>Nel ruolo di: "{{actor.character}}"</h6>
            </div>
          </div>

          <!-- Container del bottone per mostrare l'intero cast, esso viene mostrato solo se i componenti del cast sono più di 5  -->
          <div class="btn-container w-100 text-center" v-show="cast.length > 5">
            <button type="button" class="btn btn-danger" @click="numberOfCast = cast.length, flag = false" v-if="flag">Mostra tutto</button>
            <button type="button" class="btn btn-danger" @click="numberOfCast = 5, flag = true" v-else>Nascondi</button>
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
      min-height: 22vw;
      overflow: hidden;
      .pg-modal-header-infos{
        z-index: 2;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(255,255,255,0) 75%);
        .btn-container{
          button{
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            padding: calc(0.2rem + 1vw) !important;
          }
          i{
            font-size: calc(0.2rem + 1vw) !important;
          }
        }
        .pg-title-container{
          h1{
            font-size: calc(0.5rem + 2.2vw) !important;
          }
          h2{
            font-size: calc(0.5rem + 1.5vw) !important;
          }
        }
      }
      img{
        z-index: 1;
        width: 100%;
      }
    }
    .pg-modal-body{
      .pg-modal-genres{
        li{
          font-size: calc(0.6rem + 0.4vw) !important;
        }
      }
      .pg-cast-image{
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>