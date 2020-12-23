import { shallowMount, createLocalVue } from '@vue/test-utils'

import { chats_list } from '@/store/chats_list'

import Vuex from 'vuex'
// import VueRouter from 'vue-router'
import Chat from './Chat.vue'
import ChatContent from '@/components/chat/ChatContent'

const localVue = createLocalVue()

// localVue.use(VueRouter)
localVue.use(Vuex)
localVue.component('chat-content', ChatContent)

const $route = {
  path: '/404',
  name: 'notfound',
  params: { id: 'lucas' }
}

// const router = new VueRouter()

let store = new Vuex.Store({
  state: {
    chats_list: chats_list
  }
})

const wrapper = shallowMount(Chat, {
  store,
  localVue,
  mocks: {
    $route
  }
})

describe('Chat', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
