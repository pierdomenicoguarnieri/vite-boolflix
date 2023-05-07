import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  apiUrlTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=61bccd436e95e107643dd33da21f2885&language=it-IT",
  resultMoviesArray: [],
  resultSeriesArray: [],
  resultPopularArray: [],
  resultDetails: [],
  resultCredits: [],
  resultTopRated: [],
  movieTitleToSearch: "",
  showModal: false,
  idInfos: 0,
  type: "",
  isLoading: true
})