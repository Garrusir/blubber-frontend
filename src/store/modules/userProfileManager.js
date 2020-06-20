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
    updateArchiveIdeas({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);
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
    updateProgressIdes({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);

      const data = [
        {
          id: 6,
          name: "Great Idea",
          images: "/media/images/hall2_ndsjvoz.jpg",
          description: "Good and Long description for a card that will win in the run",
          categories: "6",
          likes_count: 10,
          dislikes_count: 30,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1,
          dayOfCreation: 'Sat Jun 15 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          dayOfEnding: 'Sat Jun 29 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          achievements: [
            {
              id: 0,
              title: "Создание",
              description: "Вы разместили свою идею на портале!"
            },
            {
              id: 1,
              title: "Первый лайк",
              description: "Ого, первый заинтересовавшийся! Дальше - больше!"
            },
            {
              id: 2,
              title: "Первый комментарий",
              description: "У кого-то появились мысли по поводу вашей идеи, читайте скорее!"
            },
            {
              id: 3,
              title: "10 лайков",
              description: "Разгоняемся!"
            }
          ]
        }
      ];

      commit("setProgressIdes", data);
    }
  }
};
