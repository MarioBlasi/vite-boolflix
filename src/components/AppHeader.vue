<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="SearchBox">
            <!-- dobbiamo avere accesso a data -->
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder=" search something"
              />
              <button class="btn btn-info" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
