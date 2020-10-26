import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Notfound from './Notfound.vue'

const wrapper = shallowMount(Notfound, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('Notfound', () => {
  it('is Notfound a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
