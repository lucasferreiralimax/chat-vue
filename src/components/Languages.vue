<template lang="html">
  <select class="languages" v-model="$i18n.locale">
    <option v-for="(lang, i) in langs" :key="`Lang-${i}`" :value="lang">{{ lang }}</option>
  </select>
</template>

<script>
export default {
  name: 'languages',
  data () {
    return {
      langs: ['pt-BR', 'en-US', 'ru-RU', 'es-ES', 'fr-FR']
    }
  },
  created () {
    let localLang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en-US"
    if(localLang) {
      this.$i18n.locale = localLang
      document.querySelector('html').setAttribute('lang', localLang)
    }
  },
  watch: {
    '$i18n.locale' (value) {
      localStorage.setItem("lang", value)
      document.querySelector('html').setAttribute('lang', value)
    }
  }
}
</script>

<style lang="stylus">
.languages
  border-radius 5px
  margin 1em
  padding .5em
</style>
