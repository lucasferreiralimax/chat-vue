<template lang="html">
  <section class="chat-content">
    <section class="content">
      <ul class="chat-list">
        <li v-for="(chat, index) in chats" :key='index' :class="{'left': chat.open }">
          <div class="autor">
            <figure class="user-image" :class="chat.status">
              <img :src="chat.photo" alt="Photo profile">
            </figure>
            <span class="nome">{{ chat.name }}</span>
            <span class="time">{{ chat.date }}</span>
          </div>
          <article class="message">
            <div class="message-body">
              Lucas Lindo
            </div>
          </article>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <div class="autor">
        <figure class="user-image" :class="chats[0].status">
          <img :src="chats[0].photo" alt="Photo profile">
        </figure>
        <span class="nome">{{ chats[0].name }}</span>
        <span class="status">Escrevendo...</span>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'chat',
  props: ['chats'],
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
  padding-bottom 30px
  box-sizing border-box
  .footer,
  .content
    width 100%
    border-radius 5px
    background #fff
    
    padding 20px
    box-sizing border-box
  .footer
    margin-top 30px
    height 100px
    display flex
    flex-direction row
    position relative
    .autor
      display flex
      flex-direction row
      position relative
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
      padding 20px 20px 80px
    li
      padding 0
      margin 0 0 20px
      display flex
      flex-direction column
      justify-content center
      .autor
        position relative
      &.left
        align-items flex-end
        .autor
          flex-direction row-reverse
        .user-image
          margin 0 0 10px 10px !important
        .time
          left auto
          right 55px
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
