<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import AppCard from "./components/AppCard.vue";

export default {
  name: "Appvue",
  components: {
    AppHeader,
    AppMain,
    // AppCard,
  },
  data() {
    return {
      appApi: [],
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
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>AppVue</h2>
      </div>
    </div>
  </div>

  <AppMain></AppMain>

  <!--<AppCard></AppCard> -->
</template>
//
https://api.themoviedb.org/3/search/movie?api_key=f4a2ba11f237cc06a01698ccbd4cb0f5&query=avatar
<style lang="scss"></style>
