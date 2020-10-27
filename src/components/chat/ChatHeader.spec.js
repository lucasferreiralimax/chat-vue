import { shallowMount } from '@vue/test-utils'

import ChatHeader from './Chat.vue'

const wrapper = shallowMount(ChatHeader)

describe('ChatHeader', () => {
  it('is ChatHeader a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
