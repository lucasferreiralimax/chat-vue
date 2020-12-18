import { shallowMount, createLocalVue } from '@vue/test-utils'

import { chat_profiles } from '@/store/chat_profiles'

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Profile from './Profile.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

let store = new Vuex.Store({
  state: {
    chat_profiles: chat_profiles
  }
})

const wrapper = shallowMount(Profile, {
  store,
  localVue,
  router
})

describe('Profile', () => {
  it('is App a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
