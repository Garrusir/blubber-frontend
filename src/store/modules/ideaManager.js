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
    updateIdeaList({ commit }) {
      // fetch
      const data = [
        {
          id: 1,
          name: "Default",
          images: "/media/images/hall2.jpg",
          description: "some description",
          categories: "qwer",
          likes_count: 1,
          dislikes_count: 1,
          threshold_of_success: 50,
          is_passed: false,
          status: -1,
          author: 1
        },
        {
          id: 4,
          name: "asdfasdf",
          images: "/media/images/hall2_s724UbF.jpg",
          description: "asdfasdfasdf",
          categories: "",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1
        },
        {
          id: 5,
          name: "Есть идея - есть икея",
          images: null,
          description: "Лучшая идея о который вы даже не догадывались, нужно всего лишь...",
          categories: "",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 50,
          is_passed: false,
          status: -1,
          author: 1
        },
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
        },
        {
          id: 8,
          name: "dffas",
          images: "/media/media/multfilm_lyagushka_32117.jpg",
          description: "zxcvxc",
          categories: "6",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 32,
          is_passed: false,
          status: -1,
          author: 1
        }
      ];

      commit("setIdeaList", data);
    }
  }
};
