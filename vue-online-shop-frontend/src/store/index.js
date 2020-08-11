import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  // use Mutation to change state
  strict: true,
  // global state
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  // modify & save state with mutation
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations,
  },
  // get data of state with getters
  getters: {
    ...productGetters,
    ...manufacturerGetters,
  },
  // get backend data with asynchronous operation
  actions: {
    ...productActions,
    ...manufacturerActions,
  },
});
