import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  resultMoviesArray: [],
  resultSeriesArray: [],
  movieTitleToSearch: ""
})