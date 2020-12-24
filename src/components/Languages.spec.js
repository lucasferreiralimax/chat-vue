import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueI18n from 'vue-i18n'

import Languages from './Languages.vue'

const localVue = createLocalVue()
localVue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})

const wrapper = shallowMount(Languages, { i18n, localVue })

const langs = ['pt', 'en', 'ru', 'es', 'fr']

describe('Languages', () => {
  it('is Languages a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  for(let [index, language] of langs.entries()) {
    it(`Language select ${language}`, async () => {
      const select = wrapper.find('.languages')
      await select.setValue(language)
      expect(select.element.value).toBe(langs[index])
    })
    it(`Language change locale ${language}`, async () => {
      wrapper.vm.$i18n.locale = await language
      expect(wrapper.vm.$i18n.locale).toBe(langs[index])
    })
  }
})
