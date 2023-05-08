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
      axios.get(store.apiUrl, {
        params:{
          query: store.movieTitleToSearch
        }
      })
      .then(result => {
        store.isLoading = true;
        store.resultMoviesArray = [];
        store.resultMoviesArray = result.data.results;
        console.log(store.resultMoviesArray)
        store.isLoading = false;
      })
    },
    getApiSeries(){
      axios.get(store.apiUrlTv, {
        params:{
          query: store.movieTitleToSearch
        }
      })
      .then(result => {
        store.isLoading = true;
        store.resultSeriesArray = [];
        store.resultSeriesArray = result.data.results;
        console.log(store.resultSeriesArray);
        store.isLoading = false;
      })
    },
    getApiPopular(){
      axios.get(store.apiUrlPopular)
      .then(result => {
        store.isLoading = true;
        store.resultPopularArray = [];
        store.resultPopularArray = result.data.results;
        console.log("Pop",store.resultPopularArray);
        store.isLoading = false;
      })
    },
    getApiPopularSeries(){
      axios.get(store.apiUrlPopularSeries)
      .then(result => {
        store.isLoading = true;
        store.resultPopularSeriesArray = [];
        store.resultPopularSeriesArray = result.data.results;
        console.log("Pop",store.resultPopularSeriesArray);
        store.isLoading = false;
      })
    },
    getApiTopRated(){
      axios.get(store.apiUrlTopRated)
      .then(result => {
        store.isLoading = true;
        store.resultTopRated = [];
        store.resultTopRated = result.data.results;
        console.log("Pop",store.resultTopRated);
        store.isLoading = false;
      })
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
      store.resultMoviesArray = [];
      store.resultSeriesArray = [];
      this.getApiPopular();
      this.getApiPopularSeries();
      this.getApiTopRated();
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