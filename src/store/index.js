import Vue from 'vue'
import Vuex from 'vuex'
import { chats_list } from './chats_list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'L',
      status: 'online',
      status_persona: 'Meus versos vivos te farão viver.',
      photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
      url: 'lucas',
    },
    chats_list: chats_list
  },
  mutations: {
    updateChat (state, value) {
      let chat_current = state.chats_list.find(el => el.url == value.url)
      chat_current.chats.push(value.obj)
    },
  },
  actions: {
  },
  modules: {
  }
})
