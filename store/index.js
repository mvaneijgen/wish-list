import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      currentItem: {
        id: "0",
        title: "Loading...",
        description: "Content is loading, shouldn't be more than a second",
        price: "€",
        place: "",
        img: "https://i.imgur.com/TUnsoXz.jpg",
      },
      errors: [],
      title: "Wish List",
      by: "Mitchel van Eijgen",
      description: "",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
        state.currentItem = payload[0];
      },
      error(state, payload) {},
      description(state, payload) {
        state.description = payload;
      },
    },
  });
};

export default createStore;
