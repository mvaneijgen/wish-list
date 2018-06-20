import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      currentItem: {},
      errors: [],
      title: 'Wish List',
      by: 'Mitchel van Eijgen',
      description: '',
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
        state.currentItem = payload[0];
      },
      description(state, payload) {
        state.description = payload;
      },
    },
  });
};

export default createStore;
