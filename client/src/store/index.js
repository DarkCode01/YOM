import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

/**
 * Realiza una eticion http get al servidor
*/
const BASE_URL = 'http://localhost:1234';

async function getProducts() {
  const response = await axios.get(BASE_URL)

  return [...response.data];
}

async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/producto/${id}`)
  const data = [...response.data];
  return data;
}

// async function getProduct(id){
//   const response = await axios.get(`http://localhost:1234/product/${id}`)

//   return { ...response.data };
// }
/************************************************************* */

Vue.use(Vuex)

/**
 * Object state aislado para mejor manejo
 */
const state = {
  products: [],
  product: {}
};

/**
 * Object mutations aislado para mejor manejo
 */
const mutations = {
  getProducts(state, products) {
    state.products = [...products];
  },

  getProduct(state, product) {
    state.product = [...product];
  }
};

const actions = {

  async getProductsAction({ commit }) {

    const products = await getProducts();
    commit('getProducts', products);

  },

  async getProductByIdAction({ commit }, id) {

    const product = await getProductById(id);
    commit('getProduct', product);

  }
};

const getters = {};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
