<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import Card from "./components/Card.vue";

export default {
  name: "Appvue",
  components: {
    AppHeader,
    AppMain,
    Card,
  },
  data() {
    return {
      appApi: [],
      appApiTv: [],
    };
  },

  methods: {
    getApi(headerApi) {
      this.appApi = headerApi;
    },
    getApi(headerApiTv) {
      this.appApiTv = headerApiTv;
    },
  },
};
</script>

<template>
  <!-- <div id="app">
    <AppHeader @headerApi="getApi" @headerApiTv="getApiTv" />
    <AppMain :results="appApi" :tv-results="appApiTv" />
  </div> -->
  <AppHeader></AppHeader>
  <!-- @headerApi="getApi" -->

  <AppMain></AppMain>
  <!-- :apiData="appApi" -->
  <Movies></Movies>
  <!--<AppCard></AppCard> -->
</template>
//
https://api.themoviedb.org/3/search/movie?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar
<style lang="scss"></style>
