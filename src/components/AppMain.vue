<script>
export default {
  name: "AppMain",
  props: ["item"],
  components: {},
  data() {
    return {
      countryFlags: ["en", "it", "de", "fr", "es"],
    };
  },
  methods: {
    getcountryFlags(lang) {
      return require(`./assets/img/${lang}.png`);
    },
    // stelle(index, voto) {
    //   const media = Math.ceil(voto / 2);
    //   if (media > index) {
    //     return true;
    //   }
    // },
  },
};
</script>

<template>
  <div>
    <!-- <img
      class="countryFlags"
      v-if="this.countryFlags.includes(result.original_language)"
      :src="getcountryFlags(result.original_language)"
    />
    <span v-else>{{ result.original_language }}</span> -->
  </div>
  <!--countryFlagMap  -->
</template>
<!-- CARD -->
<style lang="scss">
.countryFlags {
  width: 50px;
  height: auto;
  margin-top: 10px;
  border: 2px solid red;
}
</style>

<!-- Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
    nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
    nazione ritornata dall’API (le flag non ci sono in FontAwesome)

    Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:

https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
  -->
