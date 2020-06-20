import { loginUrl, postDataWithResponse } from "../../utils/fetch-utils";

export default {
  state: {
    user: null,
    openLoginPopup: false
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
    async signUp({ commit }, { login, password }) {
      const formData = new FormData();
      formData.append("username", login);
      formData.append("password", password);
      const userJson = await postDataWithResponse(loginUrl, formData);
      commit("setUser", userJson);
    }
  }
};
