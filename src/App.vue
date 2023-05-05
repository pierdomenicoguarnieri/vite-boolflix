<script>
import axios from "axios";
import {store} from "./data/store.js";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default{
  name: "App",
  components:{
    Header,
    Main,
    Footer
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params:{
          query: store.movieTitleToSearch
        }
      })
      .then(result => {
        store.resultMoviesArray = [];
        store.resultMoviesArray = result.data.results;
        console.log(store.resultMoviesArray)
      })
    },
    getApiSeries(){
      axios.get(store.apiUrlTv, {
        params:{
          query: store.movieTitleToSearch
        }
      })
      .then(result => {
        store.resultSeriesArray = [];
        store.resultSeriesArray = result.data.results;
        console.log(store.resultSeriesArray)
      })
    },
    getApiPopular(){
      axios.get(store.apiUrlPopular)
      .then(result => {
        store.resultPopularArray = [];
        store.resultPopularArray = result.data.results;
        console.log("Pop",store.resultPopularArray);
      })
    },
    getApiTopRated(){
      axios.get(store.apiUrlTopRated)
      .then(result => {
        store.resultTopRated = [];
        store.resultTopRated = result.data.results;
        console.log("Pop",store.resultTopRated);
      })
    }
  },
  mounted(){
    this.getApi();
    this.getApiSeries();
    this.getApiPopular();
    this.getApiTopRated();
  }
}
</script>

<template>
  <Header @searchMovie="getApi" @searchSeries="getApiSeries"/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
@use "./scss/main.scss" as *;
</style>