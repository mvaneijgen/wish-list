<template>

    <div class="row">

      <div class="col-12 centered">
        <header>
          <div class="emoji">🎉</div>
          <h1>{{ $store.state.title }}</h1>
          <h2>{{ $store.state.by }}</h2>
          <p>{{ $store.state.description }}</p>
          <!-- {{nextBday()}} -->
        </header>
      </div>
    </div>

</template>

<script>
export default {
  // props: [],
  data() {
    return {
      title: 'Header',
      banaan: 'banaan',
    };
  }, // End data
  // computed: {},
  // methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
};
</script>

<style scoped>
/* @import 'assets/css/common/variables.scss'; */
/* @import '../assets/css/common/variables'; */
/* .emoji {
  margin-bottom: -100px;
} */
header {
  color: $brand-light;
}
</style>
