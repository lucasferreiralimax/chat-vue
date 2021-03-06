<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
:root
  --main-bg-color #fff
  --main-bg-color-rgba 0, 0, 0
  --main-bg-color-rgba-dark 255, 255, 255
  --main-alpha .25
  --main-color #000
  --main-color-primary #2cca6b

::-webkit-scrollbar-track
  background var(--main-bg-color)

::-webkit-scrollbar
  width 6px

::-webkit-scrollbar-thumb
  background-color rgba(#000, .2)
  border-radius 10px
  box-shadow inset 0 0 6px rgba(0,0,0,0)

body
  margin 0
  background var(--main-bg-color)

#app
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  color var(--main-color)
  font-family Avenir, Helvetica, Arial, sans-serif

.page
  box-sizing border-box
  padding 2em
  &.chat-content
    padding 0 2em
    width 100%
    @media screen and (min-width 830px)
      padding 0 1em
      width calc(100% - 10px)
    @media screen and (min-width 1300px)
      padding 1em 0
      width calc(100% - 30px)
  a
    color var(--main-color-primary)
    text-decoration none
</style>
