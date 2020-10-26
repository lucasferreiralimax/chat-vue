import Vue from 'vue'
import Vuex from 'vuex'
import { chats_list } from './chats_list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
