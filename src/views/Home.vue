<template>
  <div :class='"chat-page "+menu'>
    <chat-header @menuHandled="onMenu" />
    <chat-list :chats='chats_list' :title='$t("views.home.title")' v-if="isMobile" />
    <router-view />
    <chat-list :chats='chats_list' :title='$t("views.home.title")' v-if="isHome && !isMobile" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ChatHeader from '@/components/chat/ChatHeader'
import ChatList from '@/components/chat/ChatList'

export default {
  name: 'Home',
  computed: mapState(['chats_list']),
  components: {
    ChatHeader,
    ChatList
  },
  data () {
    return {
      menu: '',
      isMobile: null,
      isHome: true,
      mediaQuery: null
    }
  },
  created () {
    this.mediaQuery = window.matchMedia('(min-width: 830px)')
    this.mediaQuery.addListener(this.doCheckMobile)
    this.doCheckMobile()
    this.checkPage(this.$route)
  },
  watch: {
    $route() { this.checkPage() }
  },
  methods: {
    onMenu (value) {
      this.menu = value
    },
    doCheckMobile() {
      this.isMobile = this.mediaQuery.matches
    },    
    checkPage() {
      this.isHome = this.$route.name == 'welcome'
    }
  }  
}
</script>

<style lang="stylus">
.chat-page
  background rgba(#aaa, .3)
  padding 0
  height 100vh
  display flex
  flex-direction column
  overflow-y auto
  position fixed
  top 55px
  right 0
  left 0
  bottom 0

.user-image
  padding 2px
  box-shadow 5px 5px 32px 0px rgba(208,255,176,1)
  display flex
  align-self center
  margin 0 5px 0 0
  border-radius 100%
  border-width 0
  position relative
  img
    width 40px
    height 40px
    border-radius 100%
  &.online:before
    animation .5s status_online infinite alternate
    content ''
    width 15px
    height 15px
    border-radius 100px
    border 3px #fff solid
    position absolute
    top 0
    right 0
    background green + 50
  &.offline:before
    content ''
    width 15px
    height 15px
    border-radius 100px
    border 3px #fff solid
    position absolute
    top 0
    right 0
    background #999 + 50

@media screen and (min-width 830px)
  .chat-page
    height 100vh
    display grid
    overflow-y auto
    grid-template-columns 100px 320px 1fr
    grid-column-gap 10px
    top 0
    &.menu
      grid-template-columns 200px 320px 1fr

@media screen and (min-width 1330px)
  .chat-page
    grid-column-gap 50px
    &.menu
      grid-template-columns 250px 350px 1fr

@media screen and (min-width 1500px)
  .chat-page.menu
    grid-template-columns 250px 450px 1fr

@media screen and (min-width 1800px)
  .chat-page.menu
    grid-template-columns 450px 600px 1fr

@keyframes status_online
  0%
    box-shadow 0 0 4px green + 40
    background green + 50
  100%
    box-shadow 0 0 20px green + 40
    background green + 100
</style>
