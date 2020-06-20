export default {
  state: {
    userNotifications: null,
  },
  getters: {
    getUserNotifications(state) {
      return state.userNotifications;
    },
  },
  mutations: {
    setUserNotifications(state, value) {
      state.userNotifications = value;
    }
  },
  actions: {
    updateUserNotifications({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);
      const data = [
        {
          id: 6,
          userId: 312,
          isUnread: false,
        },
        {
          id: 6,
          userId: 332,
          isUnread: true,
        }
      ];

      commit("setUserNotifications", data);
    },
    sendUserCoffeeNotification() {
      console.log('sent')
    }
  }
};
