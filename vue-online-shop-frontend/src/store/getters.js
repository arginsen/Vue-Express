export const productGetters = {
  allProducts(state) {
    return state.products;
  },
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      /* eslint no-underscore-dangle: 0 */
      return getters.allProducts.filter((product) => product._id === id)[0];
    }
    return state.product;
  },
};

export const manufacturerGetters = {
  allManufacturers(state) {
    return state.manufacturers;
  },
  manufacturerById: (state, getters) => (id) => {
    // id 参数是 Vue 视图层通过方法调用时传入的 id，判断本地中是否存在该制造商
    if (getters.allManufacturers.length > 0) {
      return getters.allManufacturers.filter((manufacturer) => manufacturer._id === id)[0];
    }
    return state.manufacturer;
  },
};
