import { shallowMount } from '@vue/test-utils'

import About from './About.vue'

const wrapper = shallowMount(About)

describe('About', () => {
  it('is About a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
