<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      rispApi: [],
      rispApiTv: [],
      baseUri: "https://api.themoviedb.org/3/",
      typeSearch: "search/movie",
      typeSearchTv: "search/tv",
      apiKey: "?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5",
      store,

      linguaBandiere: {
        en: "./assets/img/en.png",
        es: "./assets/img/en.png",
        fr: "./assets/img/fr.png",
        it: "./assets/img/it.png",
        de: "./assets/img/de.png",
      },
    };
  },

  methods: {
    performSearch() {
      console.log("performSearch");
      // film
      axios
        .get(
          `${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.store.searchText}`
        )
        .then((res) => {
          this.rispApi = res.data.results;
          console.log(this.rispApi);
          if (this.rispApi) this.$emit("headerApi", this.rispApi);
        });
      // serie TV
      axios
        .get(
          `${this.baseUri}${this.typeSearchTv}${this.apiKey}&query=${this.store.searchText}`
        )
        .then((res) => {
          this.rispApiTv = res.data.results;
          console.log(this.rispApiTv);
          if (this.rispApiTv) this.$emit("headerApiTv", this.rispApiTv);
          //this.userText = "";
        });
    },
  },
  //   star(index, voto) {
  //     const media = Math.ceil(voto / 2);
  //     if (media > index) {
  //       return true;
  //     }
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
      <div class="row-list box mt-5">
        <div class="col-10">
          <div class="SearchBox">
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
            <div class="card">
              <!-- <img
                v-if="result.poster_path"
                class="img w-100"
                :src="`https://image.tmdb.org/t/p/w300${result.poster_path}`"
              /> -->
              <div v-if="rispApi.length > 0">
                <!-- v-if per verificare che l'array rispApi abbia almeno un
                  elemento,se si stampiamo a shermo. -->
                <ul>
                  <li v-for="result in rispApi" :key="result.id">
                    <h4>Titolo: {{ result.title }}</h4>
                    <img
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w342${result.poster_path}`"
                    />
                    <h6>Titolo Originale: {{ result.original_title }}</h6>
                    <p>
                      Lingua:
                      <img
                        :src="linguaBandiere[result.original_language]"
                        height="20px"
                      />
                      {{ result.original_language }}
                    </p>
                    <p>Voto: {{ result.vote_average }}</p>
                    <!-- <div>
                      <i
                        v-for="star in getStars(result.vote_average)"
                        class="fas fa-star"
                      ></i>
                      <i
                        v-for="star in 5 - getStars(result.vote_average)"
                        class="far fa-star"
                      ></i>
                    </div> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col flags">
          <div class="d-flex justify-content-end">
            <h2>bandiere</h2>
          </div>
        </div> -->
      </div>
    </div>

    <!-- <SearchBox></SearchBox> -->
    <!--  -->
  </header>
</template>

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

<style lang="scss">
header {
  color: orange;
  .SearchBox {
    border: 1px solid green;
    .card {
      background-color: rgb(27, 27, 27);
    }
  }
  .box {
    display: flex;
    flex-direction: row;
  }
}
</style>
