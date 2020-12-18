<template>
    <section class="chat-content">
        <h1>{{ profile_view ? 'Editar perfil' : 'Perfil' }} {{ profile.name }}</h1>        
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
    $route(to, from) {
      console.log(to)
      console.log(from)
      this.profilePage()
    }
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