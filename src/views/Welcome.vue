<template>
  <section class="chat-content page welcome">
    <h1>{{ this.$t("views.welcome.title") }} {{ user }}</h1>
    <p>{{ this.$t("views.welcome.text") }}</p>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      user: 'Lucas Lima'
    }
  }
}
</script>

<style lang="stylus">
@media screen and (max-width 830px)
  .welcome
    height auto !important
    padding 0 1.5em
</style>
