<template>
  <div :class='"chat-page "+menu'>
    <chat-header @menuHandled="onMenu" />
    <chat-list :chats='chats' title='Pessoas Online' />
    <chat :chats='chats' />
  </div>
</template>

<script>
import ChatHeader from '@/components/chat/ChatHeader'
import ChatList from '@/components/chat/ChatList'
import Chat from '@/components/chat/Chat'

export default {
  name: 'Home',
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
      menu: '',
      chats: [
        {
          name: 'Dr. L',
          status: 'online',
          content: `Deus é Maior`,
          date: '21:09 AM',
          notification: 6,
          photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
          open: false
        },
        {
          name: 'Dr. L',
          status: 'offline',
          content: `olhe em volta`,
          date: '21:09 AM',
          notification: 0,
          photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
          open: true
        },
        {
          name: 'Dr. L',
          status: 'online',
          content: `nao duvide`,
          date: '21:09 AM',
          notification: 1,
          photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
          open: false
        },
        {
          name: 'Dr. L',
          status: 'online',
          content: `Fé...`,
          date: '21:09 AM',
          notification: 1,
          photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
          open: false
        }
      ]
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
