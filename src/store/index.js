import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: [
      {
        name: 'Dr. L',
        status: 'offline',
        content: `Deus é Maior`,
        date: '21:09 AM',
        notification: 6,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      },
      {
        name: 'Dr. L',
        status: 'online',
        content: `olhe em volta`,
        date: '21:09 AM',
        notification: 0,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: true
      },
      {
        name: 'Dr. L',
        status: 'offline',
        content: `nao duvide`,
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      },
      {
        name: 'Dr. L',
        status: 'offline',
        content: `Fé...`,
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        open: false
      }
    ],
    chats_list: [
      {
        name: 'L',
        status: 'online',
        status_persona: 'Meus versos vivos te farão viver.',
        date: '21:09 AM',
        notification: 6,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7'
      },
      {
        name: 'Vue',
        status: 'offline',
        status_persona: 'Às vezes brilha o Sol em demasia',
        date: '21:09 AM',
        notification: 0,
        photo: 'https://avatars1.githubusercontent.com/u/13300590?s=200&v=4'
      },
      {
        name: 'Bot',
        status: 'online',
        status_persona: 'Nem chegarás da morte ao triste inverno',
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars3.githubusercontent.com/ml/211?s=140&v=4'
      },
      {
        name: 'Hub',
        status: 'online',
        status_persona: 'Nestas linhas com o tempo crescerás.',
        date: '21:09 AM',
        notification: 1,
        photo: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4'
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
