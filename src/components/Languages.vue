<template lang="html">
  <select class="languages" v-model="$i18n.locale">
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
  </select>
</template>

<script>
export default {
  name: 'languages',
  data () {
    return {
      langs: ['pt', 'en', 'ru', 'es', 'fr']
    }
  }
}
</script>

<style lang="stylus">
.languages
  margin 1em
  padding .5em
</style>
