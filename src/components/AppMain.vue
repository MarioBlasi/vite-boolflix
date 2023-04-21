<script>
import { store } from "../store";
export default {
  name: "AppMain",
  props: ["item"],
  components: {},
  data() {
    return {
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
            <h6>
              Lingua:
              <img
                :src="linguaBandiere[result.original_language]"
                height="50px"
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
            </div>
            <h6>Voto: {{ result.vote_average }}</h6>
            <!-- <h6 class="overflow-hidden">{{ result.overview }}</h6> -->
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
          <div class="d-none box-info card-back">
            <h6>Titolo: {{ result.name }}</h6>
            <h6>Titolo Originale: {{ result.original_name }}</h6>
            <h6>
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
            </div>
            <h6>Voto: {{ result.vote_average }}</h6>
          </div>
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
  display: block;
}
.boxcard:hover .immagine > img {
  display: none;
}

.boxcard:hover .box-info {
  display: block !important;
}
// .boxcard {
//   color: white;

//   .poster > img {
//     border-radius: 10px;
//   }
//   &:hover {
//     .immagine > img {
//       display: none;
//     }
//     .box-info {
//       display: block !important;
//     }
//   }
// }
.stars {
  color: gold;
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
  border: 1px solid grey;
}
</style>
<!-- 
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
  -->
