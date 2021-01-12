<template>
  <div class="page notfound">
    <h1>{{ this.$t("views.notfound.title") }}</h1>
    <p>{{ this.$t("views.notfound.text") }}</p>
    <router-link to="/" tag="a">{{ this.$t("views.notfound.backHome") }}</router-link>
  </div>
</template>

<style lang="stylus">
  .notfound
    align-items center
    display flex
    flex-direction column
    justify-content center
    min-height 100vh
</style>
