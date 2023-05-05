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
        store.resultSeriesArray = result.data.results;
        console.log(store.resultSeriesArray)
      })
    }
  },
  mounted(){
    this.getApi();
    this.getApiSeries();
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