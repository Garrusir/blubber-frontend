export default {
  state: {
    archiveIdeas: null,
    progressIdes: null
  },
  getters: {
    getArchiveIdeas(state) {
      return state.archiveIdeas;
    },
    getProgressIdes(state) {
      return state.progressIdes;
    }
  },
  mutations: {
    setArchiveIdeas(state, value) {
      state.archiveIdeas = value;
    },
    setProgressIdes(state, value) {
      state.progressIdes = value;
    }
  },
  actions: {
    updateArchiveIdeas({ commit, getters }) {
      // fetch
      const userId = getters.getUser.id;

      console.log("userId", userId);
      const data = [
        {
          id: 6,
          name: "asdfsdafd",
          images: "/media/images/hall2_ndsjvoz.jpg",
          description: "asdsfdasd",
          categories: "6",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1
        },
        {
          id: 7,
          name: "Идеистая идея",
          images: "/media/images/multfilm_lyagushka_32117.jpg",
          description: "Самая топовая илеяя, которую нужно выбрать",
          categories: "2",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 60,
          is_passed: false,
          status: -1,
          author: 1
        }
      ];

      commit("setArchiveIdeas", data);
    },
    updateProgressIdes({ commit, getters }) {
      // fetch
      const userId = getters.getUser.id;

      console.log("userId", userId);

      const data = [
        {
          id: 6,
          name: "asdfsdafd",
          images: "/media/images/hall2_ndsjvoz.jpg",
          description: "asdsfdasd",
          categories: "6",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1,
          achievements: [
            {
              id: 0,
              title: "Первый лайк",
              description: "Ваша идея кому-то понравилась"
            }
          ]
        }
      ];

      commit("setProgressIdes", data);
    }
  }
};
