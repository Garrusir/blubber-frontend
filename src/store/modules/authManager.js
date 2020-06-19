export default {
  state: {
    user: null,
    openLoginPopup: true
  },
  getters: {
    isOpenLoginPopup(state) {
      return state.openLoginPopup;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setOpenLoginPopup(state, value) {
      state.openLoginPopup = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    signUp({ commit }, { login, password }) {
      console.log("sign up");
      console.log(login, password);
      commit("setUser", { name: "user" });
    }
  }
};
