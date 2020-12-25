<template>
    <section class="chat-content page profile">
        <h1>{{ profile_view ? this.$tc("views.profile.title", 1) : this.$tc("views.profile.title", 2) }} {{ profile.name }}</h1>
        <img class="photo" :src="profile.photo" alt="Photo profile">
        <p>Status: {{ profile.status }}</p>
        <p>{{ profile.status_persona }}</p>
        <p>Created: {{ profile.date_created }}</p>
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
      if(profile_current) {
        this.profile = profile_current
        this.profile_view = true
      } else {
        this.profile = this.chat_profiles[0]
        this.profile_view = false
      }
    }
  }  
}
</script>

<style lang="stylus">
  .profile .photo
    border-radius 10px
    width 150px
    height 150px
    float left
    margin-right 1em
</style>