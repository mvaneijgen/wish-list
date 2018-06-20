<template>
  <div class="alloy-cards">
    <div class="inner">
      <img :src="item.img" alt="">
    </div>
    <div class="inner">
      <h2>{{ item.title }} </h2>
      <span> {{ item.price }}</span>
      <p>{{ item.description }}</p>
      <i>{{ item.place }}</i>
    </div>
  </div>
</template>


<script>
export default {
  props: ['item'],
  data() {
    return {
      title: 'CurrentItem',
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
