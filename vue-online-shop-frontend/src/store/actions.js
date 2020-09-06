import axios from 'axios';

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS,
} from './mutation-types';

const API_BASE = 'http://127.0.0.1:3000/api/v1';

export const productActions = {
  allProducts({ commit }) {
    // commit mutation ALL_PRODUCTS
    commit(ALL_PRODUCTS);

    // commit mutation ALL_PRODUCTS_SUCCESS after axios request success
    axios.get(`${API_BASE}/products`).then((response) => {
      console.log('response', response); // 从后端接口获得的 json 数据打印出来
      commit(ALL_PRODUCTS_SUCCESS, { // 提交加载完成，并将
        products: response.data, // 请求到的数据作为载荷发送给 mutation
      });
    });
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);

    const { productId } = payload;
    /* eslint no-underscore-dangle: 0 */
    axios.get(`${API_BASE}/products/${productId}`).then((response) => {
      commit(PRODUCT_BY_ID_SUCCESS, {
        product: response.data,
      });
    });
  },
  removeProduct({ commit }, payload) {
    commit(REMOVE_PRODUCT);

    const { productId } = payload;
    axios.delete(`${API_BASE}/products/${productId}`).then(() => {
      // 返回 productId，用于删除本地对应的商品
      commit(REMOVE_PRODUCT_SUCCESS, {
        productId,
      });
    });
  },
  updateProduct({ commit }, payload) {
    commit(UPDATE_PRODUCT);

    const { product } = payload;
    axios.put(`${API_BASE}/products/${product._id}`, product).then(() => {
      commit(UPDATE_PRODUCT_SUCCESS, {
        product,
      });
    });
  },
  addProduct({ commit }, payload) {
    commit(ADD_PRODUCT);

    const { product } = payload;
    axios.post(`${API_BASE}/products`, product).then((response) => {
      commit(ADD_PRODUCT_SUCCESS, {
        product: response.data,
      });
    });
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    // commit mutation AP
    commit(ALL_MANUFACTURERS);

    // commit mutation APS after axios request success
    axios.get(`${API_BASE}/manufacturers`).then((response) => {
      console.log('response', response);
      commit(ALL_MANUFACTURERS_SUCCESS, {
        manufacturers: response.data,
      });
    });
  },
  manufacturerById({ commit }, payload) {
    commit(MANUFACTURER_BY_ID);

    const { manufacturerId } = payload;
    axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then((response) => {
      commit(MANUFACTURER_BY_ID_SUCCESS, {
        manufacturer: response.data,
      });
    });
  },
  removeManufacturer({ commit }, payload) {
    commit(REMOVE_MANUFACTURER);

    const { manufacturerId } = payload;
    axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
      // 返回 manufacturerId，用于删除本地对应的制造商
      commit(REMOVE_MANUFACTURER_SUCCESS, {
        manufacturerId,
      });
    });
  },
  updateManufacturer({ commit }, payload) {
    commit(UPDATE_MANUFACTURER);

    const { manufacturer } = payload;
    axios.put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer).then(() => {
      commit(UPDATE_MANUFACTURER_SUCCESS, {
        manufacturer,
      });
    });
  },
  addManufacturer({ commit }, payload) {
    commit(ADD_MANUFACTURER);

    const { manufacturer } = payload;
    axios.post(`${API_BASE}/manufacturers`, manufacturer).then((response) => {
      commit(ADD_MANUFACTURER_SUCCESS, {
        manufacturer: response.data,
      });
    });
  },
};
