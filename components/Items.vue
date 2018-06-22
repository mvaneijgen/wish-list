<template>
  <div class="alloy-list-items" :class="{ active: item.id == $store.state.currentItem.id }" @click="updateCurrentItem(item.id)">
    <div class="inner">

      <div class="alloy-image">
        <img :src="item.img" alt="">
      </div>
      <div class="alloy-content">
        <h4 class="alloy-title">{{ item.title }} | <span>{{ item.price }}</span></h4>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      title: 'Items',
    };
  }, // End data
  // computed: {},
  methods: {
    updateCurrentItem(id) {
      const foundItem = this.$store.state.items.find(k => k.id == id);
      this.$store.state.currentItem = {
        id: foundItem.id,
        title: foundItem.title,
        description: foundItem.description,
        price: foundItem.price,
        place: foundItem.place,
        img: foundItem.img,
      };
    },
  },
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
.alloy-list {
  transition: transform;
  transition-duration: .3s;
  transition-timing-function: ease;

  &.active {
    transform: scale(1.03);
  }
}

</style>
