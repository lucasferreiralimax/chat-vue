<template>
  <div class="login">
    <form class="login-form">
      <h1>Login</h1>
      <label for="user">User</label>
      <input id="user" type="text" name="user" placeholder="User">
      <br>
      <label for="password">Password</label>
      <input id="password" type="password" name="password" placeholder="Password">
      <br>
      <button type="submit" name="button">Enter</button>
    </form>
  </div>
</template>

<style lang="stylus">
.login
  min-height 100vh
  display flex
  align-items center
  justify-content center
  padding 20px
  background #222
.login-form
  background linear-gradient(-45deg, #aaa, #eee)
  border-radius 20px
  padding 20px
  width 100%
  max-width 400px
  margin 0 auto
  box-shadow 0 0 0 2px rgba(#fff, .7), 0 0 30px 10px rgba(#000, .2)
  h1
    margin 0
    text-align center
  input
    width 100%
    margin 10px 0
    padding 10px
    box-sizing border-box
    border-radius 10px
    border 0
  button
    width 100%
    padding 10px
    border-radius 10px
    border 0


</style>
