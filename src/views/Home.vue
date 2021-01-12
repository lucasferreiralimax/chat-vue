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
  components: { ChatHeader, ChatList },
  data () {
    return {
      isHome: true,
      menu: ''
    }
  },
  created () { this.checkPage(this.$route) },
  watch: {
    $route() { this.checkPage() }
  },
  methods: {
    checkPage() { this.isHome = this.$route.name == 'welcome' },
    onMenu (value) { this.menu = value }
  }
}
</script>

<style lang="stylus">
.chat-page
  bottom 0
  display flex
  flex-direction column
  height 100vh
  left 0
  overflow-y auto
  padding 0
  position fixed
  right 0
  top 55px

@css {
  .chat-page {
    background: rgba(var(--main-bg-color-rgba), .1);
  }
}

.user-image
  align-self center
  border-radius 100%
  border-width 0
  box-shadow 5px 5px 32px 0px var(--main-bg-color)
  display flex
  margin 0 5px 0 0
  padding 2px
  position relative
  img
    border-radius 100%
    height 40px
    width 40px
  &.online:before
    animation .5s status_online infinite alternate
    background green + 50
    border 3px #fff solid
    border-radius 100px
    content ''
    height 15px
    position absolute
    right 0
    top 0
    width 15px
  &.offline:before
    background #999 + 50
    border 3px #fff solid
    border-radius 100px
    content ''
    height 15px
    position absolute
    right 0
    top 0
    width 15px

@media screen and (min-width 830px)
  .chat-page
    display grid
    grid-column-gap 10px
    grid-template-columns 100px 320px 1fr
    height 100vh
    overflow-y auto
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
    background green + 50
    box-shadow 0 0 4px green + 40
  100%
    background green + 100
    box-shadow 0 0 20px green + 40
</style>
