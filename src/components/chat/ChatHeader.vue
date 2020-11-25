<template lang="html">
  <header class="chat-header">
    <nav class="nav">
      <router-link to="/" tag="button" class="item">
        <img alt="Vue logo" src="../../assets/chat-icon.svg" width="20px">
        <span>CHAT</span>
      </router-link>
      <router-link to="/" tag="button" class="item">
        <img alt="Vue logo" src="../../assets/chat-icon.svg" width="20px">
        <span>Chat Online</span>
      </router-link>
      <div class="bottom">
        <router-link to="/about" tag="button" class="item">
          <img alt="Vue logo" src="../../assets/chat-icon-user.svg" width="20px">
          <span>Editar Perfil</span>
        </router-link>
        <router-link to="/about" tag="button" class="item">
          <img alt="Vue logo" src="../../assets/chat-icon-config.svg" width="30px">
          <span>Configurar</span>
        </router-link>
        <router-link to="/login" tag="button" class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35" width="15px">
            <path d="M3.172.53a.265.266 0 00-.262.268v2.127a.265.266 0 00.53 0V.798A.265.266 0 003.172.53zm1.544.532a.265.266 0 00-.026 0 .265.266 0 00-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 011.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 10-.344-.404A2.667 2.667 0 00.53 3.158a2.66 2.66 0 002.647 2.663 2.657 2.657 0 002.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 00-.17-.066z" fill="#00" />
          </svg>
          <span>Sair</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'chat-header',
  created () {
    window.addEventListener('resize', this.onMenuResize)
  },
  mounted () {
    if(window.innerWidth > 1300) {
      this.menu = 'menu'
      this.onMenuActive()
      this.onMenuRemoveEventListener()
    } else {
      this.menu = ''
      this.onMenuActive()
      this.onMenuEventListener()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.onMenuResize)
  },
  methods: {
    onMenuActive () {
      this.$emit('menuHandled', this.menu)
    },
    onMenuOver () {
      this.menu = 'menu'
      this.onMenuActive()
    },
    onMenuLeave () {
      this.menu = ''
      this.onMenuActive()
    },
    onMenuEventListener () {
      let header = document.querySelector('.chat-header')
      if(header) {
        header.addEventListener('mouseover', this.onMenuOver)
        header.addEventListener('mouseleave', this.onMenuLeave)
      }      
    },
    onMenuRemoveEventListener () {
      let header = document.querySelector('.chat-header')
      if(header) {
        header.removeEventListener('mouseover', this.onMenuOver)
        header.removeEventListener('mouseleave', this.onMenuLeave)
      }
    },
    onMenuResize () {
      if(window.innerWidth > 1300) {
        this.menu = 'menu'
        this.onMenuActive()
        this.onMenuRemoveEventListener()
      } else {
        this.menu = ''
        this.onMenuActive()
        this.onMenuEventListener()
      }
    }
  },
  data () {
    return {
      menu: '',
      title: 'Chat Header'
    }
  }
}
</script>

<style lang="stylus">
.chat-header
  width 100%
  height 55px
  overflow hidden
  background #fff

  transition .3s all
  z-index 99
  position fixed
  top 0
  &:hover
    height auto
  .nav
    display flex
    flex-direction column
    justify-content flex-start
    align-items stretch
    width 100%
    height 100%
    position relative
    .item
      height 55px
      font-size 12px
      padding 18px 2em
      justify-content center
      color green
      display flex
      box-sizing border-box
      align-items center
      transition .3s all
      border-bottom 1px solid #ccc
      cursor pointer
      svg
        width 40px
      span
        margin-left 10px
        text-transform uppercase
        font-weight bold
        opacity 1
      &:first-of-type
        background #2cca6b
        color #fff
    .bottom
      display flex
      flex-direction column
      svg
        width 25px
      .item:first-of-type
        background transparent
        color green

@media screen and (min-width 830px)
  .chat-header
    width 100%
    min-height 100vh
    overflow-y auto
    overflow-x hidden
    background #fff
    transition .3s width
    z-index 99
    position relative
    &:hover
      .nav .item
        // font-size 12px
        padding .5em 2em
        justify-content flex-start
        span
          opacity 1
          transform scale(1)
          display block
    .nav
      height 100vh
      .item
        border 0
        height 100px
        // font-size 0
        padding .5em
        justify-content center
        span
          opacity 0
          transform scale(0)
          display none
    .bottom
      height 150px
      position relative
      bottom 0
      right 0
      left 0
@media screen and (min-width 1300px)
  .chat-header
    .nav .item
      padding .5em 2em
      justify-content flex-start
      span
        opacity 1
        transform scale(1)
        display block
@media screen and (min-height 550px) and (min-width 830px)
  .chat-header .bottom
    position absolute
    bottom 0
</style>
