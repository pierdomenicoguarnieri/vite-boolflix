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
    width: 60%;
  }
}
</style>