import { shallowMount } from '@vue/test-utils'

import ChatInput from './Chat.vue'

const wrapper = shallowMount(ChatInput)

describe('ChatInput', () => {
  it('is ChatInput a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
