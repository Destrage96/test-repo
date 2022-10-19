import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersList: [
      {
        "id": 1,
        "name": "Ivan"
      },
      {
        "id": 2,
        "name": "Oleg"
      },
      {
        "id": 3,
        "name": "Tanya"
      },
      {
        "id": 4,
        "name": "Sveta"
      },
      {
        "id": 5,
        "name": "Nina"
      },
      {
        "id": 6,
        "name": "Anna"
      },
      {
        "id": 7,
        "name": "Nikolay"
      },
      {
        "id": 8,
        "name": "Dmitry"
      },
    ],
    removedUsers: [
      {
        "id": 11,
        "name": "Nikita"
      },
      {
        "id": 12,
        "name": "Max"
      },
      {
        "id": 13,
        "name": "Stepan"
      },
      {
        "id": 14,
        "name": "Yury"
      },
      {
        "id": 15,
        "name": "Eugeny"
      },
      {
        "id": 16,
        "name": "Nona"
      },
      {
        "id": 17,
        "name": "Olga"
      },
      {
        "id": 18,
        "name": "User with over length nikname"
      }
    ]
  },

  mutations: {
    saveRemovedList(state, payload) {
      state.removedUsers = payload
    },

    saveUsersList(state, payload) {
      state.usersList = payload
    },
  },

  actions: {
    deleteUser({commit} , payload) {
      const removeList = Object.assign([], this.state.removedUsers)
      const usersList = Object.assign([], this.state.usersList)
      const userIndex = this.state.usersList.findIndex(el => el.id === payload.id);
      if(userIndex !== -1) {
        usersList.splice(userIndex, 1)
        removeList.push(payload)
        commit('saveRemovedList', removeList)
        commit('saveUsersList', usersList)
      }
    },
    restoreUser({commit} , payload) {
      const removeList = Object.assign([], this.state.removedUsers)
      const usersList = Object.assign([], this.state.usersList)
      const userIndex = this.state.removedUsers.findIndex(el => el.id === payload.id);
      if(userIndex !== -1) {
        removeList.splice(userIndex, 1)
        usersList.push(payload)
        commit('saveRemovedList', removeList)
        commit('saveUsersList', usersList)
      }
    }
  },

  getters: {
    getUsersList(state) {
      return state.usersList;
    },

    getRemoveUsersList(state) {
      return state.removedUsers;
    },
  },
});
