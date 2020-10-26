import { shallowMount, createLocalVue } from '@vue/test-utils'

import { chats_list } from '@/store/chats_list'

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import ChatHeader from '@/components/chat/ChatHeader'
import ChatList from '@/components/chat/ChatList'
import Chat from '@/components/chat/Chat'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)
localVue.component('chat-header', ChatHeader)
localVue.component('chat-list', ChatList)
localVue.component('chat', Chat)

const router = new VueRouter()

let store = new Vuex.Store({
  state: {
    chats_list: chats_list
  }
})

const wrapper = shallowMount(Home, {
  store,
  localVue,
  router
})

describe('Home', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
