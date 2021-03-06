<template>
  <div class="login">
    <dark-mode />
    <languages />
    <form class="login-form" @submit.prevent="login">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50px">
          <path d="M463.748 48.251c-64.336-64.336-169.013-64.335-233.349.001-43.945 43.945-59.209 108.706-40.181 167.461L4.396 401.536a14.988 14.988 0 00-4.395 10.606V497c0 8.291 6.709 15 15 15h84.858c3.984 0 7.793-1.582 10.605-4.395l21.211-21.226a15.002 15.002 0 004.292-12.334l-2.637-22.793 31.582-2.974a14.975 14.975 0 0013.521-13.521l2.974-31.582 22.793 2.651c4.233.571 8.496-.85 11.704-3.691a15.04 15.04 0 005.024-11.206V363h27.422c3.984 0 7.793-1.582 10.605-4.395l38.467-37.958c58.74 19.043 122.381 4.929 166.326-39.046 64.336-64.335 64.336-169.014 0-233.35zm-42.435 106.07c-17.549 17.549-46.084 17.549-63.633 0s-17.549-46.084 0-63.633 46.084-17.549 63.633 0 17.548 46.084 0 63.633z"/>
        </svg>
        <span>{{ this.$t("views.login.title") }}</span>
      </h1>
      <label for="user">{{ this.$t("views.login.user") }}</label>
      <input id="user" type="text" name="user" :placeholder='$t("views.login.user")' v-model="user">
      <br>
      <label for="password">{{ this.$t("views.login.pass") }}</label>
      <input id="password" type="password" name="password" :placeholder='$t("views.login.pass")' v-model="pass">
      <br>
      <button name="button" :disabled="!user || !pass">{{ this.$t("views.login.enter") }}</button>
    </form>
  </div>
</template>

<script>
import Languages from '@/components/Languages'
import DarkMode from '@/components/DarkMode'
import TokenJS from '@/token'

export default {
  name: 'name',
  components: { Languages, DarkMode },
  data() {
    DarkMode
    return {
      pass: '',
      user: ''
    }
  },
  methods: {
    login () {
      this.$store.commit("updateAuth", true)
      TokenJS.setHash()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
.login
  align-items center
  background #000
  box-sizing border-box
  color var(--main-color)
  display flex
  justify-content center
  min-height 100vh
  padding 20px
  position relative
  &:before
    animation 300s backgroundAnimation infinite linear
    background #222 url('../assets/amazonas.jpg') no-repeat
    background-size cover
    content ''
    display flex
    height 100%
    width 100%
    position fixed
    top 0
    bottom 0
    right 0
    left 0
    opacity .3
    @media screen and (min-width 1300px)
      height 200%
  .languages
    position absolute
    right 0
    top 0
  .dark-mode
    background var(--main-bg-color)
    border-radius 6px
    right -8px
    padding 0 10px
    position absolute
    bottom 4px
    transform scale(.75)

@css {
  .login-form {
    background: rgba(var(--main-bg-color-rgba-dark), var(--main-alpha));
  }
}

.login-form
  backdrop-filter blur(10px)
  border-radius 10px
  border 1px solid rgba(255, 255, 255, 0.3)
  box-shadow 0 0 10px 5px rgba(#000, .5), 0 0 30px 10px rgba(#000, .2)
  box-sizing border-box
  margin 0 auto
  max-width 450px
  padding 1em
  position relative
  transition .5s box-shadow
  user-select none
  width calc(100% - 10px)
  @media screen and (min-width 450px)
    padding 2em
  &:hover
    box-shadow 0 0 10px 5px rgba(#000, .2), 0 0 30px 10px rgba(#000, .2), 0 0 2px 10px rgba(0,0,0,.1)
    transform scale(1.1)
  svg
    fill var(--main-color)
    margin-right .5em
    min-width 50px
    transform rotate(-90deg)
  h1
    align-items center
    display flex
    font-size 1.5em
    justify-content center
    margin 0 0 1em
    text-align center
    word-break break-all
    @media screen and (min-width 450px)
      font-size 2em
  input
    border 4px solid rgba(#aaa, .5)
    border-radius 10px
    box-sizing border-box
    margin 10px 0
    padding 10px
    width 100%
    &:active,
    &:hover
      border 4px solid var(--main-color-primary)
  button
    background var(--main-color-primary)
    border 0
    border 4px solid rgba(#000, .2)
    border-radius 10px
    box-shadow inset 0 0 0 2px rgba(#fff, .3)
    color #fff
    cursor pointer
    padding 10px
    text-shadow 0 2px 2px rgba(#000, .3)
    user-select none
    width 100%
    &:hover
      background rgba(#2cca6b, .5)
    &:disabled
      filter grayscale(1)
      pointer-events none

@keyframes backgroundAnimation
  0%
    transform rotate(0deg) scale(2)
  100%
    transform rotate(360deg) scale(2)
</style>
