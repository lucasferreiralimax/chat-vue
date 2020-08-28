<template>
  <div :class='"chat-page "+menu'>
    <chat-header @menuHandled="onMenu" />
    <chat-list :chats='chats_list' title='Pessoas Online' />
    <chat :chats='chats' />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ChatHeader from '@/components/chat/ChatHeader'
import ChatList from '@/components/chat/ChatList'
import Chat from '@/components/chat/Chat'

export default {
  name: 'Home',
  computed: mapState(['chats', 'chats_list']),
  components: {
    ChatHeader,
    ChatList,
    Chat
  },
  methods: {
    onMenu (value) {
      this.menu = value
    }
  },
  data () {
    return {
      menu: ''
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
  top 0
  right 0
  left 0
  bottom 0

.user-image
  padding 2px
  box-shadow 5px 5px 32px 0px rgba(208,255,176,1)
  display flex
  align-self center
  margin 0 5px 0 0
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
    transition 2s
    &.menu
      grid-template-columns 200px 320px 1fr

@media screen and (min-width 1330px)
  .chat-page
    grid-column-gap 50px

@keyframes status_online
  0%
    box-shadow 0 0 4px green + 40
    background green + 50
  100%
    box-shadow 0 0 20px green + 40
    background green + 100
</style>
