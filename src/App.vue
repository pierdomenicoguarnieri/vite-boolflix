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
      this.getResults("search/movie", "searchMovies", true, false);
    },

    getApiSeries(){
      this.getResults("search/tv", "searchSeries", true, false);
    },

    getApiPopular(){
      this.getResults("movie/popular", "popularMovies", false, false);
    },

    getApiPopularSeries(){
      this.getResults("tv/top_rated", "popularSeries", false, false);
    },

    getApiTopRated(){
      this.getResults("movie/top_rated", "topRatedMovies", false, false);
    },

    getApiMovieList(){
      store.waitForArray = false;
      this.getResults("genre/movie/list", "movieGenre", false, true);
    },

    getApiSerieList(){
      this.getResults("genre/tv/list", "serieGenre", false, true);
    },

    getApiAllMovieGenres(relativePath){
      store.results['movieGenre'].forEach(genre => {
        let params = {
            api_key: store.api_key,
            sort_by: "release_date.desc",
            language: store.language,
            with_genres: ""
          };
          params.with_genres = genre.id;
          axios.get(store.baseUrl + relativePath, {
            params
          })
          .then(result => {
            store.results[`movie${genre.name}`] = [];
            store.results[`movie${genre.name}`] = result.data.results;
            console.log("test", `movie${genre.name}`, store.results[`movie${genre.name}`]);
          })
        });
        store.isLoading = false;
    },

    getApiInfos(){
      store.modalIsLoading = true;
      this.getApiCredits();
      axios.get(`https://api.themoviedb.org/3/${store.type}/${store.idInfos}?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT`)
      .then(result => {
        store.resultDetails = [];
        store.resultDetails = result.data;
        console.log(store.resultDetails);
        store.modalIsLoading = false;
      })
    },

    getApiCredits(){
      store.modalIsLoading = true;
      axios.get(`https://api.themoviedb.org/3/${store.type}/${store.idInfos}/credits?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT`)
      .then(result => {
        store.resultCredits = [];
        store.resultCredits = result.data;
        console.log(store.resultCredits);
        store.modalIsLoading = false;
      })
    },
    
    getResults(relativePath, arrayName, query, isGenre){
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

      axios.get(store.baseUrl + relativePath, {
        params
      })
      .then(result => {
        if(isGenre){
          store.results[arrayName] = [];
          store.results[arrayName] = result.data.genres;
          console.log(arrayName, store.results[arrayName]);
          this.getApiAllMovieGenres("discover/movie");
        }else{
          store.results[arrayName] = [];
          store.results[arrayName] = result.data.results;
          console.log(arrayName, store.results[arrayName]);
        }
      })
    },

    resetApi(){
      store.results = [];
      store.search = false,
      store.isLoading = true;
      store.modalIsLoading = true;
      this.getApiPopular();
      this.getApiPopularSeries();
      this.getApiTopRated();
      this.getApiMovieList();
      this.getApiSerieList();
    }
  },
  mounted(){
    this.getApi();
    this.getApiSeries();
    this.getApiPopular();
    this.getApiPopularSeries();
    this.getApiTopRated();
    this.getApiMovieList();
    this.getApiSerieList();
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