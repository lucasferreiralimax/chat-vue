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
              {{ chat.content }}
            </div>
          </article>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <div class="content-input autor">
        <figure class="user-image" :class="chats[0].status">
          <img :src="chats[0].photo" alt="Photo profile">
        </figure>
        <span class="nome">{{ chats[0].name }}</span>
        <span class="input" contenteditable="true">Escrevendo...</span>
        <button class="btn send" type="button" name="button" @click="sendMsg()">
          Enviar Mensagem
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M490.107 1.69L8.275 243.606a14.997 14.997 0 00-1.13 26.178l112.856 69.45V497a14.998 14.998 0 0026.993 9.007l77.13-102.697 173.004 106.464a15 15 0 0022.595-9.963l91.983-481.91c.031-.16.06-.32.086-.481 1.967-12.147-10.776-21.35-21.685-15.73zM134.214 312.758L45.785 258.34 398.697 81.152 134.214 312.758zm15.784 139.294V338.81l248.446-217.561-248.446 330.803zM394.33 472.83l-152.116-93.61L470.118 75.769 394.33 472.83z"/></svg>
        </button>
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
  },
  methods: {
    sendMsg () {
      let inputChat = document.querySelector('.content-input .input')
      console.log(inputChat.textContent)
    }
  },
  mounted () {
    console.log(document.querySelector('.content-input .input'))
    console.log("vai")
    let contentChat = document.querySelector('.content-input')
    let inputChat = document.querySelector('.content-input .input')

    inputChat.addEventListener("input", (event) => {
      console.log(event)
      console.log(inputChat.textContent)
    })

    contentChat.addEventListener("click", (event) => {
      inputChat.focus()
      console.log(event)
      console.log(contentChat)
    })

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
    // margin-top 30px
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
.content-input
  width 100%
  cursor text
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
