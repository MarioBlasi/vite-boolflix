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
        en: "./img/en.png",
        es: "./img/en.png",
        fr: "./img/fr.png",
        it: "./img/it.png",
        de: "./img/de.png",
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
  //   stelle(result, voto) {
  //     const media = Math.ceil(voto / 2);
  //     if (media > result) {
  //       return true;
  //     }
  //     return false;
  //   },
};
</script>

<template>
  <div>
    <div class="flex-container" id="logo-search">
      <div class="row list mt-2">
        <!-- HEADER -->
        <div class="col top">
          <img
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          />
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
          </div>
          <!--  CARD -->
          <div class="card">
            <div class="col bottom">
              <div v-if="rispApi.length > 0">
                <ul>
                  <li v-for="result in rispApi" :key="result.id">
                    <h4>Titolo: {{ result.title }}</h4>
                    <img
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w300${result.poster_path}`"
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
                    <!-- <i
                          v-for="(star, index) in 5"
                          :key="index"
                          class="fas fa-star m-1 mt-3"
                          :class="
                            stelle(result, result.vote_average) ? 'giallo' : ''
                          "
                        ></i> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#logo-search {
  border: 5px solid red;
}
.card {
  border: 10px solid rgb(0, 22, 223);
  .bottom {
    background-color: rgb(16, 31, 26);
    border: 5px solid rgb(0, 4, 247);
    color: yellow;
  }
}
.top {
  border: 5px solid rgb(0, 223, 67);
}
</style>
