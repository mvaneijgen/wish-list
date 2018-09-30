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
        <div class="spinner" v-if="!loaded"></div>

        <transition-group name="pop">
          <alloy-items v-for="item in $store.state.items" :key="item.id" :item="item"></alloy-items>
        </transition-group>
      </section>

    </main>
    <alloy-footer></alloy-footer>

  </div>
</template>

<script>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  import Items from "~/components/Items.vue";
  import CurrentItem from "~/components/CurrentItem.vue";

  export default {
    data() {
      return {
        loaded: false,
      };
    },
    metaInfo: {
      title: "Wish List"
    },
    // middleware: "api",
    components: {
      "alloy-items": Items,
      "alloy-currentitem": CurrentItem,
      "alloy-header": Header,
      "alloy-footer": Footer
    },
    // mounted() {
      
    // }, // Be sure all elements are drawn
    async mounted () {
      const elementPos = currentItem.offsetTop;

      window.addEventListener("scroll", event => {
        // console.log(event);
        const currentItem = document.querySelector(".alloy-min-height");
        const main = document.querySelector("main");
        const scrollPos =
          window.pageYOffset || document.documentElement.scrollTop;

        const srollDownThreshold = scrollPos + 60;
        console.log(srollDownThreshold + " " + elementPos);

        if (srollDownThreshold >= elementPos) {
          main.classList.add("fixed");
        }
        // const srollUpThreshold = scrollPos - 300;
        // if (main.classList.contains('fixed')) {
        // console.log(srollUpThreshold + ' ' + elementPos);
        if (srollDownThreshold < elementPos) {
          main.classList.remove("fixed");
        }
        // }
      });

      this.$axios.setHeader('Authorization', 'Bearer f5125aed0f383716e33f9dedf5715b9ace5c3825');

      await this.$axios
        .get('https://beta.todoist.com/API/v8/tasks?project_id=2187923865')
        .then(response => {
          // console.log(response);
          this.loaded = true;
          const allItems = response.data;

          let resultItems = [];

          allItems.forEach(element => {
            let content = element.content.split(' | ');
            let itemObj = {
              id: element.id,
              title: content[0],
              description: content[1],
              price: content[2],
              place: content[3],
              img: content[4],
            };

            resultItems.push(itemObj);
          });
          this.$store.commit('add', resultItems);
        })
        .catch(function(error) {
          this.$store.commit('error', error);
          // console.log(error);
        });
    },
    methods: {}
  };

</script>

<style scoped lang="scss">
@import "~/assets/css/common/_variables.scss";

.flip-enter {
  /*transform: rotateY(0deg);*/
}

.flip-enter-active {
  /* animation: flip-in  0.5s ease-out forwards; */
  animation-name: flip-in;
  animation-duration: 600ms;
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
  animation-duration: 600ms;
  animation-delay: 0s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes flip-out {
  0% {
    transform: rotateY(0deg);
    box-shadow: 5px 5px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  30% {
    transform: rotateY(0deg) translateY(-20px);
    box-shadow: 5px 25px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  60% {
    transform: rotateY(90deg) translateY(-20px);
    box-shadow: 5px 25px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  100% {
    transform: rotateY(90deg) translateY(0);
    box-shadow: 5px 5px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
}

@keyframes flip-in {
  0% {
    transform: rotateY(90deg);
    box-shadow: 5px 5px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  30% {
    transform: rotateY(90deg) translateY(-20px);
    box-shadow: 5px 25px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  60% {
    transform: rotateY(0deg) translateY(-20px);
    box-shadow: 5px 25px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
  100% {
    transform: rotateY(0deg) translateY(0);
    box-shadow: 5px 5px 30px 0 rgba($brand-dark, $base-alpha/2);
  }
}
</style>
