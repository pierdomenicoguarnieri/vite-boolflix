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
        store.resultMovieArray = result.data.results;
        console.log(store.resultMovieArray)
      })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <Header @searchMovie="getApi"/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
@use "./scss/main.scss" as *;
</style>