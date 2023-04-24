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

  methods: {},
};
</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppCard></AppCard>
</template>

<style lang="scss"></style>
