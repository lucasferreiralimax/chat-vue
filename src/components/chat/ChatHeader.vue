<template lang="html">
  <header class="chat-header" :class="{ 'menu-show': menuBars }">
    <button class="menu-bars" :class="{ 'menu-show': menuBars }" type="button" @click="menuBars = !menuBars" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" v-if="!menuBars">
        <path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm106.667 362.667H149.333c-11.797 0-21.333-9.557-21.333-21.333 0-11.776 9.536-21.333 21.333-21.333h213.333c11.797 0 21.333 9.557 21.333 21.333.001 11.775-9.535 21.333-21.332 21.333zm0-85.334H149.333C137.536 277.333 128 267.776 128 256s9.536-21.333 21.333-21.333h213.333c11.797 0 21.333 9.557 21.333 21.333s-9.535 21.333-21.332 21.333zm0-85.333H149.333C137.536 192 128 182.443 128 170.667s9.536-21.333 21.333-21.333h213.333c11.797 0 21.333 9.557 21.333 21.333S374.464 192 362.667 192z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.976 51.976" width="30px" v-else>
        <path d="M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 01-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 112.828-2.828l7.425 7.425 7.071-7.071a2 2 0 112.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 010 2.828z"/>
      </svg>
    </button>
    <nav class="nav">
      <router-link to="/" tag="button" class="item logo" @click.native="menuBars = false">
        <img alt="Vue logo" src="../../assets/chat-icon.svg" width="20px">
        <span>{{ this.$t("nav.home") }}</span>
      </router-link>
      <languages />
      <div class="bottom" @click="menuBars = false">
        <router-link to="/profile" tag="button" class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"/>
          </svg>
          <span>{{ this.$t("nav.edit") }}</span>
        </router-link>
        <router-link to="/config" tag="button" class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.643 29.643">
            <path d="M18.621 12.397l-.546-1.295s1.267-2.859 1.157-2.969l-1.678-1.639c-.117-.113-2.978 1.191-2.978 1.191l-1.32-.533s-1.169-2.898-1.327-2.898h-2.37c-.164 0-1.242 2.906-1.242 2.906l-1.319.535S4.076 6.453 3.964 6.56L2.287 8.203c-.116.115 1.219 2.916 1.219 2.916l-.544 1.295S0 13.553 0 13.709v2.322c0 .16 2.969 1.217 2.969 1.217l.545 1.291S2.246 21.4 2.357 21.51l1.679 1.641c.113.111 2.976-1.195 2.976-1.195l1.321.537s1.166 2.896 1.326 2.896h2.37c.163 0 1.244-2.906 1.244-2.906l1.32-.535s2.918 1.242 3.031 1.135l1.678-1.643c.115-.111-1.221-2.914-1.221-2.914l.546-1.295s2.963-1.143 2.963-1.299v-2.32c.001-.159-2.969-1.215-2.969-1.215zm-7.826 5.81c-1.905 0-3.459-1.52-3.459-3.387 0-1.865 1.554-3.385 3.459-3.385 1.908 0 3.459 1.52 3.459 3.385 0 1.868-1.551 3.387-3.459 3.387z"/>
            <path d="M28.538 9.693l.014-.676s1.118-1.006 1.091-1.076l-.414-1.048c-.031-.072-1.544-.062-1.544-.062l-.474-.492s.058-1.502-.013-1.533l-1.041-.467c-.074-.033-1.117 1.035-1.117 1.035l-.684-.027s-1.039-1.119-1.109-1.092l-1.061.393c-.071.025-.036 1.518-.036 1.518l-.495.463s-1.523-.082-1.554-.014l-.457 1.02c-.032.072 1.065 1.119 1.065 1.119l-.014.672s-1.117 1.008-1.09 1.078l.415 1.049c.03.07 1.543.059 1.543.059l.473.494s-.055 1.502.016 1.533l1.041.465c.072.033 1.116-1.029 1.116-1.029l.685.023s1.037 1.119 1.109 1.094l1.058-.393c.073-.025.038-1.52.038-1.52l.494-.459s1.523.078 1.555.01l.457-1.02c.029-.07-1.067-1.117-1.067-1.117zm-2.393.207c-.367.82-1.347 1.184-2.187.809-.836-.373-1.22-1.346-.853-2.168.365-.818 1.348-1.18 2.184-.807.837.377 1.221 1.348.856 2.166z"/>
          </svg>
          <span>{{ this.$t("nav.config") }}</span>
        </router-link>
        <button class="item" @click="logout">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35" width="15px">
            <path d="M3.172.53a.265.266 0 00-.262.268v2.127a.265.266 0 00.53 0V.798A.265.266 0 003.172.53zm1.544.532a.265.266 0 00-.026 0 .265.266 0 00-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 011.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 10-.344-.404A2.667 2.667 0 00.53 3.158a2.66 2.66 0 002.647 2.663 2.657 2.657 0 002.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 00-.17-.066z" fill="#00" />
          </svg>
          <span>{{ this.$t("nav.logout") }}</span>
        </button>
      </div>
    </nav>
    <div class="nav-overlay" :class="{ 'active': menuBars }" @click="menuBars = false"></div>
  </header>
</template>

<script>
import Languages from '@/components/Languages'
import TokenJS from '@/token'

export default {
  name: 'chat-header',
  components: { Languages },
  created () { window.addEventListener('resize', this.onMenuResize) },
  destroyed () { window.removeEventListener('resize', this.onMenuResize) },
  mounted () {
    if(window.innerWidth > 1300) {
      this.menu = 'menu'
      this.onMenuActive()
      this.onMenuRemoveEventListener()
    } else {
      this.menu = ''
      this.onMenuActive()
      this.onMenuEventListener()
    }
  },
  watch: {
    isMobile (value) { if(value) this.menuBars = false }
  },
  methods: {
    onMenuActive () { this.$emit('menuHandled', this.menu) },
    onMenuOver () {
      this.menu = 'menu'
      this.onMenuActive()
    },
    onMenuLeave () {
      this.menu = ''
      this.onMenuActive()
    },
    onMenuEventListener () {
      let header = document.querySelector('.chat-header')
      if(header) {
        header.addEventListener('mouseover', this.onMenuOver)
        header.addEventListener('mouseleave', this.onMenuLeave)
      }
    },
    onMenuRemoveEventListener () {
      let header = document.querySelector('.chat-header')
      if(header) {
        header.removeEventListener('mouseover', this.onMenuOver)
        header.removeEventListener('mouseleave', this.onMenuLeave)
      }
    },
    onMenuResize () {
      if(window.innerWidth > 1300) {
        this.menu = 'menu'
        this.onMenuActive()
        this.onMenuRemoveEventListener()
      } else {
        this.menu = ''
        this.onMenuActive()
        this.onMenuEventListener()
      }
    },
    logout () {
      this.$store.commit("updateAuth", false)
      TokenJS.cleanHash()
      this.$router.push('/login')
    }
  },
  data () {
    return {
      menu: '',
      menuBars: false
    }
  }
}
</script>

<style lang="stylus">
.menu-bars
  background transparent
  border 0
  cursor pointer
  opacity .8
  padding 11px
  position absolute
  right 0
  top 0
  z-index 99
  &.menu-show svg
    fill rgba(#000, .7)
    filter drop-shadow( 0 2px 2px #fff)
  svg
    fill #fff
    filter drop-shadow( 0 2px 2px rgba(#000, .7))
  @media screen and (min-width 830px)
    display none

.nav-overlay
  background rgba(#000, .5)
  bottom 0
  left 0
  opacity 0
  pointer-events none
  position fixed
  right 0
  top 0
  z-index -1
  &.active
    opacity 1
    pointer-events all

.chat-header
  background var(--main-bg-color)
  height 55px
  overflow hidden
  position fixed
  top 0
  transition .3s all
  width 100%
  z-index 99
  &.menu-show
    height auto
  .nav
    align-items stretch
    background var(--main-bg-color)
    display flex
    flex-direction column
    height 100%
    justify-content flex-start
    position relative
    width 100%
    z-index 1
    .item
      align-items center
      background transparent
      border 0
      border-bottom 1px solid rgba(#000, .3)
      box-sizing border-box
      color var(--main-color)
      cursor pointer
      display flex
      font-size 12px
      height 55px
      justify-content center
      outline none
      padding 18px 2em
      transition .3s all
      &:focus
        box-shadow inset 0 0 10px 5px rgba(#000, .2)
      svg
        fill var(--main-color)
        width 40px
      span
        font-weight bold
        margin-left 10px
        opacity 1
        text-transform uppercase
      &:first-of-type
        background var(--main-color-primary)
        border-top 1px solid rgba(#000, .3)
        color #fff
        text-shadow 0 2px 2px rgba(#000, .4)
        img
          filter invert(1) drop-shadow(0 2px 2px rgba(#000, .7))
    .bottom
      display flex
      flex-direction column
      svg
        width 25px
      .item:first-of-type
        background transparent
        color var(--main-color)
        text-shadow none
        img
          filter invert(0)

@media screen and (min-width 830px)
  .chat-header
    min-height 100vh
    overflow-x hidden
    overflow-y auto
    position relative
    transition .3s width
    width 100%
    z-index 99
    &:hover
      .nav .item
        justify-content flex-start
        padding .5em 2em
        span
          display block
          opacity 1
          transform scale(1)
    .nav
      height 100vh
      .item
        height 100px
        justify-content center
        padding .5em
        span
          display none
          opacity 0
          transform scale(0)
    .bottom
      bottom 0
      height 150px
      left 0
      position relative
      right 0
@media screen and (min-width 1300px)
  .chat-header
    .nav .item
      justify-content flex-start
      padding .5em 2em
      span
        display block
        opacity 1
        transform scale(1)
@media screen and (min-height 550px) and (min-width 830px)
  .chat-header .bottom
    bottom 0
    position absolute
</style>
