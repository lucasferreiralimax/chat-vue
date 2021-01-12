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
  background var(--main-bg-color)
  border 0
  border-radius 5px
  box-sizing border-box
  margin 20px auto 0
  min-width 320px
  padding 10px
  position relative
  width calc(100% - 40px)
  .panel-heading,
  .panel-block,
  .panel-tabs,
  .input
    border 0
  .panel-heading
    background transparent
    color var(--main-color-primary)
    font-weight bold
    margin 0 0 1em
    padding 0.5rem
  .panel-block
    margin 0 10px
  .panel-block.is-active
    border-bottom 3px rgba(green + 100, .8) solid
  .scroll
    max-height calc(100% - 75px)
    overflow-y auto
.chat-item
  align-items center
  border-radius 10px
  color var(--main-color)
  cursor pointer
  display flex
  padding 1em 0
  position relative
  text-decoration none
  transition .3s all
  &:hover
    background linear-gradient(to left, rgba(#000, .2), rgba(#fff,0))
    color green + 100
  .nome
    margin-left 10px
  .time
    bottom 10px
    color green + 90
    font-size 0.8em
    position absolute
    right 10px
    text-transform uppercase
  .notification
    align-items center
    background green + 50
    border-radius 100px
    box-sizing border-box
    color #fff
    display flex
    font-size 12px
    font-weight bold
    height 18px
    justify-content center
    padding 0
    position absolute
    right 10px
    top 10px
    width 18px

.status_persona
  color #aaa
  font-size 11px
  margin-left 10px
  overflow hidden
  text-overflow ellipsis
  white-space pre
  width 100%

@media screen and (min-width 830px)
  .sidebar.panel
    height calc(100vh - 20px)
    margin-top 10px
    width 320px

@media screen and (min-width 1330px)
  .sidebar.panel
    height calc(100vh - 60px)
    margin-top 30px
    width 100%

</style>
