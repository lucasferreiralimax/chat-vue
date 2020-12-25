<template>
  <section class="chat-content page">
    <h1>{{ this.$t("views.config.title") }}</h1>
    <p>{{ this.$t("views.config.text") }}</p>
    <dark-mode />
    <div>{{ this.$t("views.config.language") }}<languages /></div>
  </section>    
</template>

<script>
import DarkMode from '@/components/DarkMode'
import Languages from '@/components/Languages'

export default {
  name: 'Config',
  components: { DarkMode, Languages }
}
</script>