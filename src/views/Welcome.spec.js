import { shallowMount } from '@vue/test-utils'

import Welcome from './Welcome.vue'

const wrapper = shallowMount(Welcome)

describe('Welcome', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
