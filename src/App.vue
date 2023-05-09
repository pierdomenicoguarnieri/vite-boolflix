<script>
import axios from "axios";
import {store} from "./data/store.js";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default{
  name: "App",
  components:{
    Header,
    Main,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      this.getResults("search/movie", "searchMovies", true);
    },
    getApiSeries(){
      this.getResults("search/tv", "searchSeries", true);
    },
    getApiPopular(){
      this.getResults("movie/popular", "popularMovies", false);
    },
    getApiPopularSeries(){
      this.getResults("tv/top_rated", "popularSeries", false);
    },
    getApiTopRated(){
      this.getResults("movie/top_rated", "topRatedMovies", false, false);
    },
    },
    getApiInfos(){
      axios.get(`https://api.themoviedb.org/3/${store.type}/${store.idInfos}?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT`)
      .then(result => {
        store.isLoading = true;
        store.resultDetails = [];
        store.resultDetails = result.data;
        this.getApiCredits()
        console.log(store.resultDetails);
        store.isLoading = false;
      })
    },
    getApiCredits(){
      axios.get(`https://api.themoviedb.org/3/${store.type}/${store.idInfos}/credits?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT`)
      .then(result => {
        store.resultCredits = [];
        store.resultCredits = result.data;
        console.log(store.resultCredits);
        store.isLoading = false;
      })
    },
    resetApi(){
      store.results = [];
      store.search = false,
      this.getApiPopular();
      this.getApiPopularSeries();
      this.getApiTopRated();
    },
    getResults(relativePath, arrayName, query){
      let params = {}
      if (query){
        params = {
          api_key: store.api_key,
          language: store.language,
          query: store.movieTitleToSearch
        }
      }else{
        params = {
        api_key: store.api_key,
        language: store.language
        }
      }
      store.isLoading = true;

      axios.get(store.baseUrl + relativePath, {
        params
      })
      .then(result => {
        store.results[arrayName] = [];
        store.results[arrayName] = result.data.results;
        console.log(arrayName, store.results[arrayName]);
        store.isLoading = false;
      })
    }
  },
  mounted(){
    this.getApi();
    this.getApiSeries();
    this.getApiPopular();
    this.getApiPopularSeries();
    this.getApiTopRated();
  }
}
</script>

<template>
  <Header @searchMovie="getApi" @searchSeries="getApiSeries" @resetPage="resetApi"/>
  <Main @getApiDetails="getApiInfos"/>
</template>

<style lang="scss">
@use "./scss/main.scss" as *;
</style>