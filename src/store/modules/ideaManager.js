import axios from "axios";

export default {
  state: {
    ideaList: null
  },
  getters: {
    getIdeaList(state) {
      return state.ideaList;
    }
  },
  mutations: {
    setIdeaList(state, value) {
      return (state.ideaList = value);
    }
  },
  actions: {
    updateIdeaList({ commit, getters }) {
      const host = getters.getHost;
      fetch(`${host}/api/records/`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          commit("setIdeaList", data);
        });
    },
    saveIdea({ getters }, data) {
      const host = getters.getHost;

      axios.post(`${host}/api/records/`, data).then(response => {
        console.log("response", response);
      });
    }
  }
};
