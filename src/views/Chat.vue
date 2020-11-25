<template>
    <chat-content :chats='chats' />
</template>

<script>
import { mapState } from 'vuex'
import ChatContent from '@/components/chat/ChatContent'

export default {
  name: 'Chat',
  computed: mapState(['chats_list']),
  created () {
    let chat_current = this.chats_list.find(el => el.url == this.$route.params.id)
    if(chat_current) {
      this.chats = chat_current.chats
    } else {
    //   this.$router.push({ name: 'Notfound' })
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
      let chat_current = this.chats_list.find(el => el.url == this.$route.params.id)
      console.log(chat_current)
      if(chat_current) {
        this.chats = chat_current.chats
      } else {
        // this.$router.push({ name: 'Notfound' })
      }
    }
  },
  components: {
    ChatContent
  },
  data () {
    return {
      chats: []
    }
  }
}
</script>

<style lang="stylus">
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
</style>
