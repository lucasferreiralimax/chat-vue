<template lang="html">
  <div class="dark-mode">
    <p>{{ $t("views.config.darkMode") }}</p>
    <input type="checkbox" id="dark-mode" v-model="dark" />    
    <label for="dark-mode">{{ $t("views.config.darkMode") }}</label>
  </div>
</template>

<script>
export default {
  name: 'dark-mode',
  data () {
    return {
      dark: false
    }
  },
  created () {
    this.darkMode(JSON.parse(localStorage.getItem("dark")))
  },
  watch: {
    dark() { this.darkMode(this.dark) }
  },
  methods: {
    darkMode (type) {
      let root = document.body
      if(type) {
        root.style.setProperty("--main-color", "#fff")
        root.style.setProperty("--main-bg-color", "#333")
        this.dark = true
        localStorage.setItem("dark", true)
      } else {
        root.style.setProperty("--main-color", "#000")
        root.style.setProperty("--main-bg-color", "#fff")
        this.dark = false
        localStorage.setItem("dark", false)
      }
    },
  }
}
</script>

<style lang="stylus">
#dark-mode 
  height 0
  width 0
  visibility hidden
  position absolute
  &:checked + label
    background var(--main-color-primary)
  &:checked + label:after
    left calc(100% - 5px)
    transform translateX(-100%)

.dark-mode
  display flex
  align-items center
  p
    margin-right 1em

.dark-mode label    
  cursor pointer
  text-indent -9999px
  width 50px
  height 30px
  display block
  border-radius 100px
  position relative
  user-select none
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

@css {
  .dark-mode label {
    background: rgba(var(--main-bg-color-rgba), .5);
  }  
}
</style>
