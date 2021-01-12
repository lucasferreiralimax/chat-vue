<template>
    <section class="chat-content page profile">
        <h1>{{ profile_view ? this.$tc("views.profile.title", 1) : this.$tc("views.profile.title", 2) }} {{ profile.name }}</h1>
        <img class="photo" :src="profile.photo" alt="Photo profile">
        <p>{{ this.$t('views.profile.status') }}: {{ profile.status }}</p>
        <p>{{ profile.status_persona }}</p>
        <p>{{ this.$t('views.profile.created') }}: {{ profile.date_created }}</p>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  computed: mapState(['chat_profiles']),
  data () {
    return {
      profile: [],
      profile_view: true
    }
  },
  created () { this.profilePage() },
  watch: {
    $route() { this.profilePage() }
  },
  methods: {
    profilePage () {
      let profile_current = this.chat_profiles.find(el => el.url == this.$route.params.id)
      this.profile_view = Boolean(profile_current)
      profile_current ? this.profile = profile_current : this.profile = this.chat_profiles[0]
    }
  }
}
</script>

<style lang="stylus">
  .profile .photo
    border-radius 10px
    float left
    height 150px
    margin-right 1em
    width 150px
</style>
