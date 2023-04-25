<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

import { store } from "../store";
export default {
  name: "AppMain",
  props: ["item"],
  components: {},
  data() {
    return {
      store,
      linguaBandiere: {
        en: "./src/assets/img/en.png",
        uk: "./src/assets/img/en.png",
        es: "./src/assets/img/es.png",
        fr: "./src/assets/img/fr.png",
        it: "./src/assets/img/it.png",
        de: "./src/assets/img/de.png",
        ja: "./src/assets/img/ja.png",
        hi: "./src/assets/img/hi.png",
        ru: "./src/assets/img/ru.png",
        zh: "./src/assets/img/zh.png",
        ar: "./src/assets/img/ar.png",
        nl: "./src/assets/img/nl.png",
        ko: "./src/assets/img/ko.png",
        tr: "./src/assets/img/tr.png",
        pt: "./src/assets/img/pt.png",
      },
      showInfo: false,
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
  },
};
</script>

<template>
  <div class="container container_main">
    <div class="row card boxcard">
      <h2>Film</h2>
      <div
        class="d-flex flex-wrap col moviesList justify-content-center text-center p-1"
        v-if="store.rispApi.length > 0"
      >
        <h6 v-for="result in store.rispApi" :key="result.id">
          <img
            class="p-2 immagine"
            v-if="result.poster_path"
            :src="`https://image.tmdb.org/t/p/w342${result.poster_path}`"
          />
          <div class="d-none box-info card-back">
            <h6>Titolo: {{ result.title }}</h6>
            <h6>Titolo Originale: {{ result.original_title }}</h6>
            <h6 class="bandiere">
              Lingua:
              <img :src="linguaBandiere[result.original_language]" />
              {{ result.original_language }}
            </h6>
            <div>
              <i
                v-for="(star, index) in 5"
                :key="index"
                class="fa-solid fa-star"
                :class="stelle(index, result.vote_average) ? 'stars' : ''"
              ></i>
            </div>
            <p></p>
            <h6>Voto: {{ result.vote_average }}</h6>
            <p class="overflow-hidden">{{ result.overview }}</p>
          </div>
        </h6>
      </div>
    </div>
    <!-- FILM -->
    <div class="row card boxcard">
      <h2>Serie Tv</h2>
      <div
        class="d-flex flex-wrap col moviesList justify-content-center text-center p-1"
        v-if="store.rispApiTv.length > 0"
      >
        <h6 v-for="result in store.rispApiTv" :key="result.id">
          <img
            class="p-2 immagine"
            v-if="result.poster_path"
            :src="`https://image.tmdb.org/t/p/w342${result.poster_path}`"
          />
          <div class="d-none box-info card-back overflow-hidden">
            <h6>Titolo: {{ result.name }}</h6>
            <h6>Titolo Originale: {{ result.original_name }}</h6>
            <h6 class="bandiere">
              Lingua:
              <img
                :src="linguaBandiere[result.original_language]"
                height="20px"
              />
              {{ result.original_language }}
            </h6>
            <div>
              <i
                v-for="(star, index) in 5"
                :key="index"
                class="fas fa-star"
                :class="stelle(index, result.vote_average) ? 'stars' : ''"
              ></i>
              <p></p>
            </div>
            <div class="valutazione text-center">
              <h6>Voto: {{ result.vote_average }}</h6>
              <p class="overflow-hidden">{{ result.overview }}</p>
            </div>
          </div>
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 0.8rem;
  height: 0.8rem;
  background: rgba(128, 128, 128, 0.007);
  margin-right: 10px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(7, 75, 153, 0.425);
  border: none;
}
::-webkit-resizer {
  -webkit-border-radius: 4px;
  background-color: rgba(128, 128, 128, 0.062);
  border: none;
}
::-webkit-scrollbar-thumb {
  min-height: 0.8rem;
  min-width: 0.8rem;
  -webkit-border-radius: 50%;
  background-color: rgb(220, 26, 40);
  border: none;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(220, 26, 40);
  border: none;
}
::-webkit-scrollbar-thumb:active {
  background-color: rgb(220, 26, 40);
  border: none;
}
.container_main {
  margin: 0 auto;
  background-color: rgba(27, 27, 27, 0.897);
  max-width: 100%;
}
.row {
  border: none;
  background-color: rgba(27, 27, 27, 0.897);
}
.box-info {
  border: 2px solid rgba(128, 128, 128, 0.062);
  max-width: 21rem;
  margin-left: 0.5rem;
}
.boxcard:hover .immagine > img {
  display: none;
}

.boxcard:hover .box-info {
  display: block !important;
}
.bandiere > img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
@mixin stars($larghezza, $sfondo, $rotazione) {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  border-right: round($larghezza/2) solid transparent;
  border-bottom: round($larghezza/2.83) solid $sfondo;
  border-left: round($larghezza/2) solid transparent;
  -moz-transform: rotate(180deg + $rotazione);
  -webkit-transform: rotate(180deg + $rotazione);
  -ms-transform: rotate(180deg + $rotazione);
  -o-transform: rotate(180deg + $rotazione);
  transform: rotate(180deg + $rotazione);
  &:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    top: round($larghezza/-5.57);
    left: round($larghezza/-3.68);
    border-bottom: round($larghezza/2.83) solid $sfondo;
    border-left: round($larghezza/8.762) solid transparent;
    border-right: round($larghezza/2) solid transparent;
    -moz-transform: rotate(-72deg);
    -webkit-transform: rotate(-72deg);
    -ms-transform: rotate(-72deg);
    -o-transform: rotate(-72deg);
    transform: rotate(-72deg);
  }
  &:before {
    content: "";
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    top: 0;
    right: round($larghezza/-2);
    border-bottom: round($larghezza/2.83) solid $sfondo;
    border-left: round($larghezza/2) solid transparent;
    border-right: round($larghezza/2) solid transparent;
    -moz-transform: rotate(72deg);
    -webkit-transform: rotate(72deg);
    -ms-transform: rotate(72deg);
    -o-transform: rotate(72deg);
    transform: rotate(72deg);
  }
}
.stars {
  @include stars(20px, gold, 0);
}

.overflow-hidden {
  max-width: 20rem;
}
.top {
  line-height: 30px;
  .bandiera > img {
    height: 30px;
    width: 30px;
    margin: 0;
    border-radius: 50%;
  }
}
.moviesList,
h2 {
  color: wheat;
  background-color: rgba(27, 27, 27, 0.897);
  border-radius: 10px;
  border: 2px solid rgba(128, 128, 128, 0.062);
}
</style>
