export default {
  namespaced: true,
  state: () => ({
    overlay: null,
  }),
  mutations: {
    setOverlay(state, { overlayInfo, trigger }) {
      state.overlay = { ...overlayInfo, trigger };
    },
    setOverlayNull(state) {
      state.overlay = null;
    },
  },
  actions: {
    closeOverlay({ commit }) {
      commit('setOverlayNull');
    },
    updateOverlay({ commit }, { overlayInfo, trigger }) {
      commit('setOverlay', { overlayInfo, trigger });
    },
  },
  getters: {},
};
