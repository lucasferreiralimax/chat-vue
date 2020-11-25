import { shallowMount } from '@vue/test-utils'

import ChatInput from './ChatInput.vue'

const wrapper = shallowMount(ChatInput, {
  propsData: {
    chats: [
      {},
      {
        name: 'L',
        status: 'online',
        status_persona: 'Meus versos vivos te farão viver.',
        date: '21:09 AM',
        notification: 6,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
      }
    ]
  }
})

describe('ChatInput', () => {
  it('is ChatInput a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
