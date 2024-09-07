export default {
  namespaced: true,
  state: () => ({
    enableNextItemTimer: true,
  }),
  mutations: {
    setEnableNextItemTimer(state, enable) {
      state.enableNextItemTimer = enable;
    },
  },
  actions: {
    updateEnableNextItemTimer({ commit }, enable) {
      commit('setEnableNextItemTimer', enable);
    },
  },
  getters: {},
};
