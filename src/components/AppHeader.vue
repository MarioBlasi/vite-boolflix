<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      baseUri: "https://api.themoviedb.org/3/",
      typeSearch: "search/movie",
      typeSearchTv: "search/tv",
      apiKey: "?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5",
      store,
    };
  },
  methods: {
    performSearch() {
      // film
      axios
        .get(
          `${this.baseUri}${this.typeSearch}${this.apiKey}&query=${this.store.searchText}`
        )
        .then((res) => {
          this.store.rispApi = res.data.results;
          console.log(this.store.rispApi);
          // if (this.rispApi) this.$emit("headerApi", this.rispApi);
        });
      // serie TV
      axios
        .get(
          `${this.baseUri}${this.typeSearchTv}${this.apiKey}&query=${this.store.searchText}`
        )
        .then((res) => {
          this.store.rispApiTv = res.data.results;
          console.log(this.store.rispApiTv);
          // if (this.rispApiTv) this.$emit("headerApiTv", this.rispApiTv);
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
        <div class="col top">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
