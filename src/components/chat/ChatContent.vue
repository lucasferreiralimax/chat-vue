<template lang="html">
  <section class="chat-content h-full">
    <section class="content">
      <ul class="chat-list" v-if="chats">
        <li>
          <div class="autor fixed" @click="profile(chatProfile.url)">
            <figure class="user-image" :class="chatProfile.status">
              <img :src="chatProfile.photo" alt="Photo profile">
            </figure>
            <div class="block">
              <span class="nome">{{ chatProfile.name }}</span>
              <span class="status_persona">{{ chatProfile.status_persona }}</span>
            </div>
          </div>
        </li>
        <li v-for="(chat, index) in chats" :key='index' :class="{'left': chat.open, 'right': !chat.open }">
          <div class="autor">
            <figure class="user-image" :class="chat.status" @click="profile(chat.url)">
              <img :src="chat.photo" alt="Photo profile">
            </figure>
            <span class="nome">{{ chat.name }}</span>
            <span class="time">{{ chat.date }}</span>
          </div>
          <article class="message">
            <div class="message-body">
              <pre>{{ chat.content }}</pre>
            </div>
          </article>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <chat-input :chats='chats' />
    </footer>
  </section>
</template>

<script>
import ChatInput from '@/components/chat/ChatInput'

export default {
  name: 'chat-content',
  props: ['chats', 'chatProfile'],
  components: { ChatInput },
  methods: {
    profile (url) { this.$router.push(`/profile/${url}`) }
  }
}
</script>

<style lang="stylus">
.chat-content
  box-sizing border-box
  margin 0 auto
  padding-top 30px
  width calc(100% - 40px)
  .footer,
  .content
    background var(--main-bg-color)
    border-radius 5px
    box-sizing border-box
    padding 20px
    width 100%
  .footer
    display flex
    flex-direction row
    height 100px
    position relative
    .autor
      display flex
      flex-direction row
      position relative
      .input,
      .status
        bottom 10px
        left 60px
        position absolute
  .actions
    align-items center
    display flex
    flex-flow row
    position absolute
    right 20px
    button
      align-items center
      background transparent
      border 0
      display flex
      justify-content center
      margin 0 10px
      svg
        margin-right 5px
      span
        background #eee
        border 1px solid #999
        border-radius 100px
        color #333
        padding 3px 6px
    .logout
      display flex
      flex-direction column
      margin-left 60px
      span
        background #f00
        color #fff
        margin-top 5px
      svg
        margin-right 0
      svg, svg path
        fill #f00
  .content
    overflow-y hidden
    padding 0
    position relative
    ul
      height calc(100% - 40px)
      list-style none
      margin 0
      overflow-y auto
      padding 100px 20px 20px
    li
      display flex
      flex-direction column
      justify-content center
      padding 0
      .autor
        position relative
      &.right + .right .autor
          display none
      &.left
        align-items flex-end
        + .left .autor
          display none
        .autor
          flex-direction row-reverse
        .user-image
          margin 0 0 10px 10px !important
        .time
          left auto
          right 55px
        .message-body pre
          text-align left
      .user-image
        cursor pointer
        margin 0 10px 10px 0 !important
      .time
        bottom 10px
        font-size 11px
        left 55px
        position absolute
    .autor, .message
      display flex
      flex-direction row
    .message-body
      border-width 1px
      padding 10px
      pre
        margin 0
        text-align right !important

.autor.fixed
  background var(--main-bg-color)
  border-radius 10px
  box-shadow 0 0 0 1px rgba(#fff, .2), 0 0 10px rgba(#000, .2)
  box-sizing border-box
  cursor pointer
  padding 1em
  position fixed !important
  transform translateY(-75px)
  z-index 11
  figure.user-image
    margin-bottom 0 !important
  .block
    display flex
    flex-direction column
    .status_persona
      margin-left 0
      margin-top .5em

@media screen and (max-width 830px)
  .chat-content
    height 100vh
    &.h-full
      display flex
      flex-direction column
      height calc(100vh - 125px)
      justify-content space-between
      margin-bottom 25px
      .content
        height calc(100% - 120px)
        ul
          height calc(100% - 120px)
@media screen and (min-width 830px)
  .chat-content
    margin-right 10px
    padding-bottom 0
    padding-top 10px
    width calc(100% - 10px)
    .content
      height calc(100vh - 130px)
      margin-bottom 10px

@media screen and (min-width 1330px)
  .chat-content
    margin-right 30px
    padding-top 30px
    width calc(100% - 30px)
    .content
      height calc(100vh - 190px)
      margin-bottom 30px
</style>
