<template lang="html">
  <div class="dark-mode">
    <p>{{ $t("views.config.darkMode") }}</p>
    <button @click="togleMode()" :class="{ 'active': dark }">{{ $t("views.config.darkMode") }}</button>
  </div>
</template>

<script>
export default {
  name: 'dark-mode'
}
</script>

<style lang="stylus">
.dark-mode
  display flex
  align-items center
  p
    margin-right 1em

.dark-mode button    
  cursor pointer
  text-indent -9999px
  width 50px
  height 30px
  display block
  border-radius 100px
  position relative
  user-select none
  border 0
  &:active:after
    width 33px
  &:after
    content ''
    position absolute
    top 5px
    left 5px
    width 20px
    height 20px
    background #fff
    border-radius 90px
    transition 0.3s
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
