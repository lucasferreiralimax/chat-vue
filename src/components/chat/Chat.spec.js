import { shallowMount } from '@vue/test-utils'

import Chat from './Chat.vue'

const wrapper = shallowMount(Chat)

describe('Chat', () => {
  it('is Chat a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
