<template lang="html">
  <section class="chat-input">
    <figure class="user-image" :class="user.status">
      <img :src="user.photo" alt="Photo profile">
    </figure>
    <textarea class="input" @keyup.enter.exact="sendMsg()"></textarea>
    <button class="btn send" type="button" name="button" @click="sendMsg()">
      {{ this.$t("chatComponent.sendMsg") }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M490.107 1.69L8.275 243.606a14.997 14.997 0 00-1.13 26.178l112.856 69.45V497a14.998 14.998 0 0026.993 9.007l77.13-102.697 173.004 106.464a15 15 0 0022.595-9.963l91.983-481.91c.031-.16.06-.32.086-.481 1.967-12.147-10.776-21.35-21.685-15.73zM134.214 312.758L45.785 258.34 398.697 81.152 134.214 312.758zm15.784 139.294V338.81l248.446-217.561-248.446 330.803zM394.33 472.83l-152.116-93.61L470.118 75.769 394.33 472.83z"/></svg>
    </button>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'chat-input',
  computed: mapState(['user']),
  methods: {
    sendMsg () {
      let inputChat = document.querySelector('.chat-input .input')

      if(inputChat.value.trim()) {
        this.$store.commit('updateChat', {
          url: this.$route.params.id,
          obj: {
            name: this.user.name,
            status: this.user.status,
            content: `${inputChat.value}`,
            date: this.moment().format('LTS'),
            notification: 1,
            photo: this.user.photo,
            url: 'lucas',
            open: true
          }
        })
        inputChat.value = ''
        setTimeout(this.scrollBottom, 1000);
      }
    },
    scrollBottom () {
      let contentChatConversation = document.querySelector('.chat-list')
      contentChatConversation.scrollTop = contentChatConversation.scrollHeight
    }
  },
  mounted () {
    let contentChat = document.querySelector('.chat-input')
    let inputChat = document.querySelector('.chat-input .input')

    if(inputChat) {
      contentChat.addEventListener("click", () => {
        inputChat.focus()
      })
    }
  }
}
</script>

<style lang="stylus">
.chat-input
  cursor text
  display flex
  flex-direction row
  position relative
  width 100%
  .autor
    display flex
    flex-direction row
    position relative
    .input,
    .status
      bottom 10px
      left 60px
      position absolute
  .input
    background var(--main-bg-color)
    border 0
    box-sizing border-box
    color var(--main-color)
    height 60px
    outline none
    width 100%
  .btn.send
    background var(--main-color-primary)
    border 0
    border-radius 100px
    bottom -25px
    cursor pointer
    font-size 0
    height 40px
    position absolute
    right -25px
    transition .3s all
    width 40px
    &:hover
      transform scale(1.2)
    svg
      fill #fff
</style>
