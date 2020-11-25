import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import ChatHeader from './ChatHeader.vue'

const wrapper = shallowMount(ChatHeader, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('ChatHeader', () => {
  it('is ChatHeader a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
