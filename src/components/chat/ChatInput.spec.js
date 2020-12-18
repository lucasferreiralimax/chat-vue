import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import ChatInput from './ChatInput.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: {
      name: 'L',
      status: 'online',
      status_persona: 'Meus versos vivos te farão viver.',
      photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
      url: 'lucas',
    }
  }
})

const wrapper = shallowMount(ChatInput, {
  store,
  localVue
})

describe('ChatInput', () => {
  it('is ChatInput a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})