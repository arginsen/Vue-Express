import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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

export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    const { product } = payload;
    state.cart.push(product);
  },
  [REMOVE_FROM_CART](state, payload) {
    const { productId } = payload;
    /* eslint no-underscore-dangle: 0 */
    state.cart = state.cart.filter((product) => product._id !== productId);
  },
};

export const productMutations = {
  // 顺序同 action，所有、单个、移除、更新、添加
  [ALL_PRODUCTS](state) {
    state.showLoader = true; // action 提交 ALL_PRODUCTS，开启加载状态
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    const { products } = payload; // 提取 action 从后端获取到发送过来的数据

    state.showLoader = false; // action 加载完成后关闭加载状态
    state.products = products; // 将提取出的数据赋值给本地 state，完成改动
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.product = product;
  },
  [REMOVE_PRODUCT](state) {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { productId } = payload;
    state.products = state.products.filter((product) => product._id !== productId);
  },
  [UPDATE_PRODUCT](state) {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product: newProduct } = payload;
    state.product = newProduct;
    state.products = state.products.map((product) => {
      if (product._id === newProduct._id) {
        return newProduct;
      }

      return product;
    });
  },
  [ADD_PRODUCT](state) {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.products = state.products.concat(product);
  },
};

export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    const { manufacturers } = payload;

    state.showLoader = false;
    state.manufacturers = manufacturers;
  },
  [MANUFACTURER_BY_ID](state) {
    state.showLoader = true;
  },
  [MANUFACTURER_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer } = payload;
    state.manufacturer = manufacturer;
  },
  [REMOVE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [REMOVE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturerId } = payload;
    state.manufacturers = state.manufacturers.filter(
      (manufacturer) => manufacturer._id !== manufacturerId,
    );
  },
  [UPDATE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [UPDATE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer: newManufacturer } = payload;
    state.manufacturers = state.manufacturers.map((manufacturer) => {
      if (manufacturer._id === newManufacturer._id) {
        return newManufacturer;
      }

      return manufacturer;
    });
  },
  [ADD_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [ADD_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer } = payload;
    state.manufacturers = state.manufacturers.concat(manufacturer);
  },
};
