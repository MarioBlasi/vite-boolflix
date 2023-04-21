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
  <div class="sectionCard">
    <div class="flex-container" id="logo-search">
      <div class="row list box-card">
        <!-- HEADER -->
        <div class="col top ">
          <div class="logoBox d-flex justify-content-between">
            <img
              class="logo p-2 ms-3"
              src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              height="75"
            />
            <div class="row">
              <div class="col">
                <div class="link">
                  <ul>
                    <li>Home</li>
                    <li>TvShow</li>
                    <li>Movies</li>
                    <li>Recently Added</li>
                    <li>MyList</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="SearchBox me-3">
              <div class="input-group mt-3">
                <input
                  type="text"
                  class="form"
                  placeholder=" search something"
                  v-model="store.searchText"
                  @keyup.enter="performSearch()"
                />
                <button class="btn btn-outline-dark" @click="performSearch()">
                  search
                </button>
              </div>
            </div>
          </div>
          <!--  CARD -->
          <div class="card boxcard">
            <div class="col bottom">
              <!-- film -->
              <div class="moviesList" v-if="rispApi.length > 0">
               <h2>Film</h2>
                <p>
                  <p class="poster"  v-for="result in rispApi" :key="result.id">
                    <img
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w342${result.poster_path}`"
                    />
                    
                    <div class="box-info">
                      <h6 class="copertina">Titolo: {{ result.title }}</h6>
                      <h6>Titolo Originale: {{ result.original_title }}</h6>
                      <p class="bandiera">
                        Lingua:
                        <img
                          class="liBandiere"
                          :src="linguaBandiere[result.original_language]"
                          height="20px"
                        />
                        {{ result.original_language }}
                      </p>
                      <div class="voti">
                        <i
                          v-for="(star, index) in 5"
                          :key="index"
                          class="fas fa-star"
                          :class="
                            stelle(index, result.vote_average) ? 'star' : ''
                          "
                        ></i>
                      </div>
                      <p class="avarage">Voto: {{ result.vote_average }}</p>
                      <h6 class="overflow-hidden">{{ result.overview }}</h6>
                    </div>
                  </p>
                </p>
              </div>
              <!-- serie Tv -->
              <div class="moviesList" v-if="rispApiTv.length > 0">
                <h2>Serie Tv</h2>
                <p>
                  <p class="poster" v-for="result in rispApiTv" :key="result.id">
                    <img
                      class="liBandiere"
                      v-if="result.poster_path"
                      :src="`https://image.tmdb.org/t/p/w185${result.poster_path}`"
                    />
                    <div class="box-info">
                      <h4>Titolo: {{ result.name }}</h4>
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
                    </div>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sectionCard{
  background-color: rgba(27, 27, 27, 0.897);
  border-radius: 10px;
}
.col{
  background-color: rgba(27, 27, 27, 0.897);
  border-radius: 10px;
}
.boxcard {
  border-radius: 10px;
  margin-left: 1rem;
  border: none;

  .poster > img {
    border-radius: 10px;
  }
  // &:hover {
  //   .dai > img {
  //     display: none;
  //   }
  //   .box-info {
  //     display:block !important;
  //   }
  // }
}
#logo-search {
  font-size: medium;
  p {
    background-color: rgba(27, 27, 27, 0.897);
    color: wheat;
  }
}
.star {
  color: gold;
  width: 20px;
  height: 20px;
  background-color: yellow;
}
.top {
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
.moviesList h2{
  color: wheat;
  background-color:  rgba(27, 27, 27, 0.425);
}
.link {
  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    padding: 1rem;
    color: white;
    font-weight: bold;
  }
  li:hover {
    color: rgba(255, 255, 255, 0.39);
  }
}
</style>
