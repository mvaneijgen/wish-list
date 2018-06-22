<template>
  <div>

    <alloy-header></alloy-header>

    <main>

      <section class="alloy-min-height">
        <transition name="flip" mode="out-in">
          <alloy-currentitem :item="$store.state.currentItem" :key="$store.state.currentItem.id"></alloy-currentitem>
        </transition>
      </section>

      <section>
        <alloy-items v-for="item in $store.state.items" :key="item.id" :item="item"></alloy-items>
      </section>

    </main>

    <alloy-footer></alloy-footer>

  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import Items from '~/components/Items.vue';
import CurrentItem from '~/components/CurrentItem.vue';

// import axios from 'axios';
//
// axios.defaults.headers.common['Authorization'] =
//   'Bearer f5125aed0f383716e33f9dedf5715b9ace5c3825';
// axios
//   .get(`https://beta.todoist.com/API/v8/projects/2187923865`)
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

export default {
  data() {
    return {};
  },
  middleware: 'api',
  components: {
    'alloy-items': Items,
    'alloy-currentitem': CurrentItem,
    'alloy-header': Header,
    'alloy-footer': Footer,
  },

  methods: {
    nextBday() {
      var oneDay = 24 * 60 * 60 * 1000;
      var secondDate = new Date(new Date().getFullYear() + 1, 3, 5);
      var firstDate = new Date();
      return Math.round(
        Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
      );
    },
  },
};
</script>

<style scoped>
.flip-enter {
  /*transform: rotateY(0deg);*/
}

.flip-enter-active {
  /* animation: flip-in  0.5s ease-out forwards; */
  animation-name: flip-in;
  animation-duration: 150ms;
  animation-delay: 0s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.flip-leave {
  /*transform: rotateY(0deg);*/
}

.flip-leave-active {
  /* animation: flip-out 0.5s ease-out forwards; */
  animation-name: flip-out;
  animation-duration: 150ms;
  animation-delay: 0s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
