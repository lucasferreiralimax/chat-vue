<template lang="html">
  <nav class="sidebar panel">
    <h2 class="panel-heading">{{ title }}</h2>
    <div class="scroll">
      <router-link :to="{ name: 'chat', params: { id: chat.url }}" tag="a" class="chat-item panel-block" v-for="(chat, index) in chats" :key='index'>
        <figure class="user-image">
          <img :src="chat.photo" alt="Photo profile">
        </figure>
        <span class="nome">{{ chat.name }}</span>
        <span class="status_persona">{{ chat.status_persona }}</span>
        <span class="time">{{ chat.date }}</span>
        <span v-if="chat.notification >= 1" class="notification">{{ chat.notification }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'chat-list',
  props: ['chats', 'title']
}
</script>

<style lang="stylus">
.sidebar.panel
  width calc(100% - 40px)
  min-width 320px
  margin 20px auto 0
  border 0
  border-radius 5px
  background var(--main-bg-color)
  padding 10px
  position relative
  box-sizing border-box
  .panel-heading,
  .panel-block,
  .panel-tabs,
  .input
    border 0
  .panel-heading
    color var(--main-color-primary)
    background transparent
    font-weight bold
    padding 0.5rem
    margin 0 0 1em
  .panel-block
    margin 0 10px
  .panel-block.is-active
    border-bottom 3px rgba(green + 100, .8) solid
  .scroll
    max-height calc(100% - 75px)
    overflow-y auto
.chat-item
  position relative
  transition .3s all
  display flex
  cursor pointer
  padding 1em 0
  border-radius 10px
  align-items center
  text-decoration none
  color var(--main-color)
  &:hover
    color green + 100
    background linear-gradient(to left, rgba(#000, .2), rgba(#fff,0))
  .nome
    margin-left 10px
  .status_persona
    font-size 11px
    color #aaa
    margin-left 10px
    overflow hidden
    text-overflow ellipsis
    white-space pre
    width 100%
  .time
    position absolute
    bottom 10px
    right 10px
    color green + 90
    text-transform uppercase
    font-size 0.8em
  .notification
    background green + 50
    color #fff
    width 18px
    height 18px
    border-radius 100px
    box-sizing border-box
    display flex
    justify-content center
    align-items center
    padding 0
    position absolute
    right 10px
    top 10px
    font-size 12px
    font-weight bold

@media screen and (min-width 830px)
  .sidebar.panel
    width 320px
    height calc(100vh - 20px)
    margin-top 10px

@media screen and (min-width 1330px)
  .sidebar.panel
    height calc(100vh - 60px)
    width 100%
    margin-top 30px

</style>
