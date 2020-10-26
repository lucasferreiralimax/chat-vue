import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from './App.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(VueRouter)

const router = new VueRouter()

const wrapper = shallowMount(App, {
  localVue,
  router
})

describe('App', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
