<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import AppCard from "./components/AppCard.vue";
// import axios from "axios";
export default {
  name: "Appvue",
  components: {
    AppHeader,
    AppMain,
    // AppCard,
  },
  data() {
    return {
      // url: "https://api.themoviedb.org/3/search/movie",
      // typeSearch: "search/movie",
      // typeSearchTv: "search/tv",
      // apiKey: "?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar",
    };
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <div><h1>AppVue</h1></div>
  <AppMain></AppMain>

  <!--<AppCard></AppCard> -->
</template>
//
https://api.themoviedb.org/3/search/movie?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar
<style lang="scss"></style>
