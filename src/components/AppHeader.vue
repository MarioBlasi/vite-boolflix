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
        uk: "./img/en.png",
        es: "./img/en.png",
        fr: "./img/fr.png",
        it: "./img/it.png",
        de: "./img/de.png",
        ja: "./img/ja.png",
        hi: "./img/hi.png",
        ru: "./img/ru.png",
        zh: "./img/zh.png",
        ar: "./img/ar.png",
      },
    };
  },
  methods: {
    stelle(index, voto) {
      const media = Math.ceil(voto / 2);
      if (media > index) {
        return true;
      }
      console.log(this.stelle);
    },

    performSearch() {
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
};
</script>

<template>
  <div>
    <div class="flex-container" id="logo-search">
      <div class="row list">
        <!-- HEADER -->
        <div class="col top p-1">
          <div class="logoBox d-flex justify-content-between">
            <img
              class="logo p-2 ms-3"
              src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              height="75"
            />
            <div class="link">
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            <div class="SearchBox me-3">
              <!-- <div class="icon">
                <i class="fa-light fa-bell"></i>
                <i class="fa-solid fa-bell"></i>
              </div> -->
              <div class="input-group mt-3">
                <input
                  type="text"
                  class="form"
                  placeholder=" search something"
                  v-model="store.searchText"
                  @keyup.enter="performSearch()"
                />

                <button class="btn-info" type="button" @click="performSearch()">
                  Search
                </button>
              </div>
            </div>
          </div>
          <!--  CARD -->
          <div class="card">
            <div class="col bottom">
              <!-- film -->
              <div v-if="rispApi.length > 0">
                <ul>
                  <li v-for="result in rispApi" :key="result.id">
                    <h4 class="copertina">Titolo: {{ result.title }}</h4>
                    <img
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w342${result.poster_path}`"
                    />
                    <h6>Titolo Originale: {{ result.original_title }}</h6>
                    <p class="bandiera">
                      Lingua:
                      <img
                        :src="linguaBandiere[result.original_language]"
                        height="20px"
                      />
                      {{ result.original_language }}
                    </p>
                    <div>
                      <i
                        v-for="(star, index) in 5"
                        :key="index"
                        class="fas fa-star"
                        :class="
                          stelle(index, result.vote_average) ? 'star' : ''
                        "
                      ></i>
                    </div>
                    <p>Voto: {{ result.vote_average }}</p>
                  </li>
                </ul>
              </div>
              <!-- serie Tv -->
              <div v-if="rispApiTv.length > 0">
                <ul>
                  <li v-for="result in rispApiTv" :key="result.id">
                    <h4>Titolo: {{ result.name }}</h4>
                    <img
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w185${result.poster_path}`"
                    />
                    <h6>Titolo Originale: {{ result.original_name }}</h6>
                    <p class="bandiera">
                      Lingua:
                      <img
                        :src="linguaBandiere[result.original_language]"
                        height="20px"
                      />
                      {{ result.original_language }}
                    </p>

                    <p>Voto: {{ result.vote_average }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <i
                          v-for="(star, index) in 5"
                          :key="index"
                          class="fas fa-star m-1 mt-3"
                          :class="
                            stelle(result, result.vote_average) ? 'giallo' : ''
                          "
                        ></i> -->
</template>

<style lang="scss">
#logo-search {
  font-size: larger;
}
.icon {
  background-color: antiquewhite !important;
  color: white;
}
.star {
  color: gold;
  width: 20px;
  height: 20px;
  background-color: yellow;
}
.bottom {
  background-color: rgb(22, 22, 22);

  color: yellow;
}

.top {
  background-color: rgb(22, 22, 22);
  line-height: 30px;

  .bandiera > img {
    height: 30px;
    width: 30px;
    margin: 0;
    border-radius: 50%;
  }

  h1 {
    padding: 0 1px;
  }
}
.link {
  ul {
    display: flex;
    margin-left: 5rem;
  }
  li {
    list-style-type: none;
    padding: 1rem;
    color: white;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.39);
  }
}
</style>
