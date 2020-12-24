import { shallowMount } from '@vue/test-utils'

import DarkMode from './DarkMode.vue'

const wrapper = shallowMount(DarkMode)

describe('DarkMode', () => {
  it('is DarkMode a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
