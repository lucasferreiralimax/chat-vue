<template>
    <chat-content :chats='chats' :chatProfile="chat_profile" />
</template>

<script>
import { mapState } from 'vuex'
import ChatContent from '@/components/chat/ChatContent'

export default {
  name: 'Chat',
  components: { ChatContent },
  computed: mapState(['chats_list']),
  data () {
    return {
      chats: [],
      chat_profile: null
    }
  },
  created () { this.chatPage() },
  watch: {
    $route() { this.chatPage() }
  },  
  methods: {
    chatPage () {
      let chat_current = this.chats_list.find(el => el.url == this.$route.params.id)
      if(chat_current) {
        this.chats = chat_current.chats
        let { name, photo, status, url, status_persona } = chat_current
        this.chat_profile = { name, photo, status, url, status_persona }
      } else {
        this.$router.push({ name: 'notfound' })
      }
    }
  }  
}
</script>