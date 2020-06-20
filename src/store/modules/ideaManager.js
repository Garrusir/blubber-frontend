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
    }
  }
};
