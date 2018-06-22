<template>
  <div id="currentItem" class="alloy-cards alloy-current-item">
    <div class="inner">

      <div class="alloy-image">
        <img :src="item.img" alt="">
      </div>

      <div class="alloy-content">
        <h2 class="alloy-title">{{ item.title }} </h2>
        <span class="price"> {{ item.price }}</span>
        <p>{{ item.description }} <span class="location">{{ item.place }}</span></p>

      </div>

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
  created() {}, // Each time the app is created (once?)
  mounted() {
    window.addEventListener('scroll', event => {
      // console.log(event);
      const currentItem = document.querySelector('#currentItem');
      const main = document.querySelector('main');
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementPos = currentItem.offsetTop;
      console.log(scrollPos + ' ' + elementPos);
      if (scrollPos + 20 >= elementPos) {
        main.classList.add('fixed');
      }
      if (scrollPos - 60 < elementPos) {
        main.classList.remove('fixed');
      }
    });
  }, // Be sure all elements are drawn
};
</script>

<style scoped>
h1 {
  color: #0ba;
}
</style>
