import { shallowMount } from '@vue/test-utils'

import Config from './Config.vue'

const wrapper = shallowMount(Config)

describe('Config', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
