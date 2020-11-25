import { shallowMount } from '@vue/test-utils'

import ChatContent from './ChatContent.vue'

const wrapper = shallowMount(ChatContent)

describe('ChatContent', () => {
  it('is ChatContent a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
