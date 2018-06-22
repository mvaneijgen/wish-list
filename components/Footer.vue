<template>
  <div class="component-Footer">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // props: [],
  data() {
    return {
      title: 'Footer',
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
h1 {
  color: #0ba;
}
</style>
