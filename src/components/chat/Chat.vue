<template lang="html">
  <section class="chat-content">
    <section class="content">
      <ul class="chat-list" v-if="chats">
        <li v-for="(chat, index) in chats" :key='index' :class="{'left': chat.open, 'right': !chat.open }">
          <div class="autor">
            <figure class="user-image" :class="chat.status">
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
  name: 'chat',
  props: ['chats'],
  components: {
    ChatInput
  },
  data () {
    return {
      title: 'Chat'
    }
  }
}
</script>

<style lang="stylus">
.chat-content
  width calc(100% - 40px)
  margin 0 auto
  padding-top 30px
  padding-bottom 75px
  box-sizing border-box
  .footer,
  .content
    width 100%
    border-radius 5px
    background #fff
    padding 20px
    box-sizing border-box
  .footer
    height 100px
    display flex
    flex-direction row
    position relative
    .autor
      display flex
      flex-direction row
      position relative
      .input,
      .status
        position absolute
        left 60px
        bottom 10px
  .actions
    display flex
    flex-flow row
    align-items center
    position absolute
    right 20px
    button
      background transparent
      display flex
      justify-content center
      align-items center
      border 0
      margin 0 10px
      svg
        margin-right 5px
      span
        background #eee
        border 1px solid #999
        color #333
        padding 3px 6px
        border-radius 100px
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
    position relative
    padding 0
    ul
      list-style none
      height 100%
      overflow-y auto
      margin 0
      padding 20px
    li
      padding 0
      margin 0 0 20px
      display flex
      flex-direction column
      justify-content center
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
        margin 0 10px 10px 0 !important
      .time
        font-size 11px
        position absolute
        bottom 10px
        left 55px
    .autor, .message
      display flex
      flex-direction row
    .message-body
      border-width 1px
      padding 10px
      pre
        text-align right !important
        margin 0
.content-input
  width 100%
  cursor text
  .input
    width calc(100% - 110px)
    box-sizing border-box
    border 0
    outline none
    height 80px
  .btn.send
    background green + 50
    position absolute
    top 0
    right 0
    border-radius 100px
    font-size 0
    border 0
    width 40px
    height 40px
    cursor pointer
    transition .3s all
    &:hover
      transform scale(1.2)
    svg
      fill #fff
@media screen and (min-width 830px)
  .chat-content
    width calc(100% - 10px)
    margin-right 10px
    padding-top 10px
    padding-bottom 0
    .content
      height calc(100vh - 130px)
      margin-bottom 10px

@media screen and (min-width 1330px)
  .chat-content
    width calc(100% - 30px)
    padding-top 30px
    margin-right 30px
    .content
      height calc(100vh - 190px)
      margin-bottom 30px
</style>
