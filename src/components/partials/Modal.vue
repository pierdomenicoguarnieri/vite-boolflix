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
  <div class="pg-modal-wrapper d-flex justify-content-center align-items-center" v-if="store.showModal" @click="store.showModal = !store.showModal">
    <div class="pg-modal overflow-scroll rounded-2 p-3 bg-dark text-white">
      <div class="pg-modal-header">
        <h1>Film Infos</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pg-modal-wrapper{
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .pg-modal{
    width: 60%;
  }
}
</style>