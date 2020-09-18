<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">

::-webkit-scrollbar-track
  background #fff

::-webkit-scrollbar
  background-color rgba(#fff, 0)
  width 6px

::-webkit-scrollbar-thumb
  background-color rgba(#000, .2)
  border-radius 10px
  box-shadow inset 0 0 6px rgba(0,0,0,0)

body
  margin 0

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
