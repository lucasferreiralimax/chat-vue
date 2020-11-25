import { shallowMount } from '@vue/test-utils'

import ChatList from './ChatList.vue'

const wrapper = shallowMount(ChatList)

describe('ChatList', () => {
  it('is ChatList a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
