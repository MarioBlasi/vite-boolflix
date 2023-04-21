import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  loading: "",
  API_URL: "https://api.themoviedb.org/3/search/movie?",
  data: "",
  archetypes: [],
  selectedArchetype: null,
  rispApi: [],
  rispApiTv: [],
});
