import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1/';

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
  mutations: {
    // modify & save state with mutation
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload;
      /* eslint no-underscore-dangle: 0 */
      state.cart = state.cart.filter((product) => product._id !== productId);
    },
    // response actions events
    ALL_PRODUCTS(state) {
      // loading
      state.showLoader = true;
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {
      const { products } = payload;

      // loading finished
      state.showLoader = false;
      // commit products to state
      state.products = products;
    },
  },
  actions: {
    // get backend data with asynchronous operation
    allProducts({ commit }) {
      // commit mutation AP
      commit('ALL_PRODUCTS');

      // commit mutation APS after axios request success
      axios.get(`${API_BASE}/products`).then((response) => {
        console.log('response', response);
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data,
        });
      });
    },
  },
});
