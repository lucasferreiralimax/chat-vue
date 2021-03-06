<template lang="html">
  <div class="dark-mode" @click="togleMode()">
    <p>{{ $t("views.config.darkMode") }}</p>
    <button :class="{ 'active': dark }">{{ $t("views.config.darkMode") }}</button>
  </div>
</template>

<script>
export default {
  name: 'dark-mode'
}
</script>

<style lang="stylus">
.dark-mode
  align-items center
  display flex
  cursor pointer
  user-select none
  p
    margin-right 1em

.dark-mode button
  border 0
  border-radius 100px
  cursor pointer
  display block
  height 30px
  position relative
  text-indent -9999px
  user-select none
  width 50px
  outline none
  &:active:after
    width 33px
  &:after
    background #fff
    border-radius 90px
    content ''
    height 20px
    left 5px
    position absolute
    top 5px
    transition 0.3s
    width 20px
  &.active
    background var(--main-color-primary)
    &:after
      left calc(100% - 5px)
      transform translateX(-100%)

@css {
  .dark-mode button {
    background: rgba(var(--main-bg-color-rgba), .5);
  }
}
</style>
