import {reactive} from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  api_key: "61bccd436e95e107643dd33da21f2885",
  language: "it-IT",
  results: [],
  resultDetails: [],
  resultCredits: [],
  movieTitleToSearch: "",
  showModal: false,
  idInfos: 0,
  type: "",
  isLoading: true,
  search: false,
})