<script>
import axios from "axios";
import { store } from "./store";
export default {
  name: "AppHeader",
  data() {
    return {
      rispApi: [],
      baseUri: "https://api.themoviedb.org/3/",
      typeSearch: "search/movie",
      apiKey: "?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5",
      store,
      //   archetipe: "",
      //   archetypes: null,
    };
  },

  mounted() {
    // axios.get("https://api.themoviedb.org/3/search/movie").then((resp) => {
    //   this.archtypes = resp.data;
    // });
  },
  methods: {
    performSearch() {
      console.log("performSearch");
      axios
        .get(
          `${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.store.searchText}`
        )
        .then((res) => {
          this.rispApi = res.data.results;
          console.log(this.rispApi);
          if (this.rispApi) this.$emit("headerApi", this.rispApi);
          //this.userText = "";
        });
    },
  },
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
        <div class="col asas">
          <div class="SearchBox mt-5">
            <div class="input-group d-flex justify-content-end mb-3">
              <input
                type="text"
                class="form"
                placeholder=" search something"
                v-model="store.searchText"
                @keyup.enter="performSearch()"
              />

              <button
                class="btn btn-info"
                type="button"
                @click="performSearch()"
              >
                Search
              </button>
            </div>
            <div v-if="rispApi.length > 0">
              <!-- v-if per verificare che l'array rispApi abbia almeno un
              elemento,se si stampiamo a shermo. -->
              <ul>
                <li v-for="result in rispApi" :key="result.id">
                  <h4>Titolo: {{ result.title }}</h4>
                  <h6>Titolo Originale: {{ result.original_title }}</h6>
                  <p>Lingua: {{ result.original_language }}</p>
                  <p>Voto: {{ result.vote_average }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<!-- <SearchBox></SearchBox> -->
<!-- <div class="container d-flex justify-content-between align-items-center">
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
    </div> -->

<style lang="scss"></style>
