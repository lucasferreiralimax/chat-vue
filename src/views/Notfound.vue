<template>
  <div class="notfound">
    <h1>Page 404</h1>
    <p>Desculpe o inconveniente essa página não existe</p>
    <router-link to="/" tag="a">
      Clique aqui para ir para Home
    </router-link>
  </div>
</template>

<style lang="stylus">
  .notfound
    display flex
    align-items center
    justify-content center
    min-height 100vh
    flex-direction column
    a
      text-decoration none
      color #2cca6b
</style>
