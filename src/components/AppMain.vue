<script>
export default {
  name: "AppMain",
  props: ["item"],
  components: {},
  data() {
    return {
      bandiere: ["en", "it", "de", "fr", "es"],
    };
  },
  methods: {},
};
</script>

<template>
  <div class="content">
    <div class="card-container img-fluid" v-for="card in cards" :key="card.id">
      <!-- <div @click="store.increment()">{{ store.count }}</div> -->
      <img :src="card.card_images[0].image_url" alt="card-image" />
      <b
        ><p class="name">{{ card.name }}</p></b
      >
      <b
        ><p class="type">{{ card.type }}</p></b
      >
      <div class="ark">
        {{ card.archetype }}
      </div>
    </div>
  </div>
  <!-- CARD -->
</template>

<style lang="scss"></style>
