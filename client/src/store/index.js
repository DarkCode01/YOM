import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

/**
 * Realiza una eticion http get al servidor
*/
async function getProducts() {
    const response = await axios.get('http://localhost:1234')
    
    return [...response.data];
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
  products: []
};

/**
 * Object mutations aislado para mejor manejo
 */
const mutations = {
  getProducts(state, products){
    state.products = [...products];
  }
};

const actions = {

  async getProductsAction({ commit }){

    const products = await getProducts();
    commit('getProducts', products);

  }
};

const getters = {};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
