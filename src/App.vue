<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import CardsCounter from "./components/CardsCounter.vue";

export default {
  name: "Appvue",
  components: {
    AppHeader,
    AppMain,
    CardsCounter,
  },
  data() {
    return {
      // appApi: [],
    };
  },

  methods: {
    getApi(headerApi) {
      this.appApi = headerApi;
    },
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <!-- @headerApi="getApi" -->

  <AppMain></AppMain>
  <!-- :apiData="appApi" -->
  <CardsCounter></CardsCounter>
  <!--<AppCard></AppCard> -->
</template>
//
https://api.themoviedb.org/3/search/movie?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar
<style lang="scss"></style>
