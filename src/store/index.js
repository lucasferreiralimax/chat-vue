import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: [
      {
        name: 'Dr. L',
        status: 'online',
        content: `Deus é Maior`,
        date: '21:09 AM',
        notification: 6,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      },
      {
        name: 'Dr. L',
        status: 'offline',
        content: `olhe em volta`,
        date: '21:09 AM',
        notification: 0,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: true
      },
      {
        name: 'Dr. L',
        status: 'online',
        content: `nao duvide`,
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      },
      {
        name: 'Dr. L',
        status: 'online',
        content: `Fé...`,
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      }
    ]
  },
  mutations: {
    updateChat (state, value) {
      state.chats.push(value)
    },
  },
  actions: {
  },
  modules: {
  }
})
