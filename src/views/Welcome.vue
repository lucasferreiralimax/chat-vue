<template>
  <section class="chat-content welcome">
    <h1>Seja bem-vindo {{ user }}</h1>
    <p>Uma interface simples de chat criada com Vue.js</p>
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
    padding 0 1.5em
    height auto !important
</style>