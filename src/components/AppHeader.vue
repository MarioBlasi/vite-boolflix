<script>
import { store } from "./store";
export default {
  name: "AppHeader",
  data() {
    return {
      //   rispApi: [],
      //   userText: "",
      //   baseUri: "https://api.themoviedb.org/3/search/movie",
      //   typeSearch: "search/movie",
      //   apiKey: "?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar",
      store,
      archetipe: "",
      archetypes: null,
    };
  },
  methods: {
    filterResults() {
      let url;
      if (this.archetype === "") {
        url = state.API_URL;
      } else {
        url = `${store.API_URL}&archetype=${this.archetype}`;
      }
      store.fetchCards(url);
    },
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/search/movie").then((resp) => {
      this.archtypes = resp.data;
    });
  },
  //   methods: {
  //     // search() {
  //     //   axios
  //     //     .get(
  //     //       `${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.userText}`
  //     //     )
  //     //     .then((res) => {
  //     //       this.rispApi = res.data.results;
  //     //       if (this.rispApi) this.$emit("headerApi", this.rispApi);
  //     //       this.userText = "";
  //     //     });
  //     // },
  //   },
};
</script>

<template>
  <header>
    <!-- <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchBar d-flex align-items-center mx-4">
            <div class="align-items-center d-flex mt-3">
              <input
                @keyup.enter="search"
                v-model="userText"
                type="text"
                placeholder="Search..."
                class="searchBox"
              />
              <button @click="search" type="submit" class="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="SearchBox">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder=" search something"
                v-model="store.searchText"
                @keyup="performSearch()"
              />
              <button
                class="btn btn-info"
                type="button"
                @click="performSearch()"
              >
                Search
              </button>
            </div>
            {{ store.searchText }}
          </div>
        </div>
      </div>
    </div>
    <!-- <SearchBox></SearchBox> -->
    <div class="container d-flex justify-content-between align-items-center">
      <h1>Netflix</h1>
      <div class="mb-3">
        <label for="">Filter by Archetype</label>
        <select
          class="form-select"
          v-model="archetypes"
          @change="filterResults()"
        >
          <option value="" selected>Select All</option>
          <option :value="archetipe.archetype_name" v-for="arch in archetypes">
            {{ arch.archetipe_name }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
// .searchBar {
//   justify-content: end;
//   .searchBox {
//     width: 15rem;
//   }
//   .button {
//     width: 6rem;
//   }
// }
</style>
