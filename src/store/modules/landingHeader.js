export default {
  namespaced: true,
  state: () => ({
    headerColor: '',
    headerFontColor: '',
  }),
  mutations: {
    setHeaderColor(state, color) {
      state.headerColor = color;
    },
    setHeaderFontColor(state, color) {
      state.headerFontColor = color;
    },
  },
  actions: {
    updateHeaderColor({ commit }, color) {
      commit('setHeaderColor', color);
    },
    updateHeaderFontColor({ commit }, color) {
      commit('setHeaderFontColor', color);
    },
  },
  getters: {},
};
