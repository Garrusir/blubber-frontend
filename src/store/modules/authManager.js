// import { loginUrl, postDataWithResponse } from "../../utils/fetch-utils";

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
    signUp({ commit, getters }, data) {
      // const formData = new FormData();
      // formData.append("username", login);
      // formData.append("password", password);
      console.log("login data", data);
      // const userJson = await postDataWithResponse(loginUrl, formData);
      const host = getters.getHost;

      fetch(`${host}/profile/login/`, {
        method: "POST",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          commit("setUser", data);
        });
    }
  }
};
