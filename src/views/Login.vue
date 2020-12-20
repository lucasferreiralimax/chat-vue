<template>
  <div class="login">
    <form class="login-form" @submit.prevent="login">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50px">
          <path d="M463.748 48.251c-64.336-64.336-169.013-64.335-233.349.001-43.945 43.945-59.209 108.706-40.181 167.461L4.396 401.536a14.988 14.988 0 00-4.395 10.606V497c0 8.291 6.709 15 15 15h84.858c3.984 0 7.793-1.582 10.605-4.395l21.211-21.226a15.002 15.002 0 004.292-12.334l-2.637-22.793 31.582-2.974a14.975 14.975 0 0013.521-13.521l2.974-31.582 22.793 2.651c4.233.571 8.496-.85 11.704-3.691a15.04 15.04 0 005.024-11.206V363h27.422c3.984 0 7.793-1.582 10.605-4.395l38.467-37.958c58.74 19.043 122.381 4.929 166.326-39.046 64.336-64.335 64.336-169.014 0-233.35zm-42.435 106.07c-17.549 17.549-46.084 17.549-63.633 0s-17.549-46.084 0-63.633 46.084-17.549 63.633 0 17.548 46.084 0 63.633z"/>
        </svg>
        <span>Login</span>
      </h1>
      <label for="user">User</label>
      <input id="user" type="text" name="user" placeholder="User" v-model="user">
      <br>
      <label for="password">Password</label>
      <input id="password" type="password" name="password" placeholder="Password" v-model="pass">
      <br>
      <button name="button" :disabled="!user || !pass">Enter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      user: '',
      pass: ''
    }
  },
  methods: {
    login () {
      this.$store.commit("updateAuth", true)
      console.log(this.$store.state.auth)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
.login
  min-height 100vh
  display flex
  align-items center
  justify-content center
  padding 20px
  background #222 url('../assets/everest.jpg') no-repeat
  background-size cover
  box-sizing border-box
.login-form
  background linear-gradient(-45deg, #fff, #aaa)
  border-radius 10px
  padding 2.6em
  width 100%
  max-width 400px
  margin 0 auto
  box-shadow 0 0 0 2px rgba(#fff, .7), 0 0 30px 10px rgba(#000, .2)
  svg
    fill #2c3e50
    margin-right .5em
    transform rotate(-90deg)
  h1
    margin 0 0 1em
    text-align center
    display flex
    align-items center
    justify-content center
    font-size 2.6em
  input
    width 100%
    margin 10px 0
    padding 10px
    box-sizing border-box
    border-radius 10px
    border 4px solid rgba(#aaa, .5)
    &:active,
    &:hover
      border 4px solid #2cca6b
  button
    width 100%
    padding 10px
    border-radius 10px
    border 0
    background #2cca6b
    border 4px solid rgba(#000, .2)
    box-shadow inset 0 0 0 2px rgba(#fff, .3)
    color #fff
    cursor pointer
    text-shadow 0 2px 2px rgba(#000, .3)
    user-select none
    &:hover
      background rgba(#2cca6b, .5)
    &:disabled
      pointer-events none
      filter grayscale(1)
</style>
