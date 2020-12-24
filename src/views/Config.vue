<template>
  <section class="chat-content">
    <h1>{{ this.$t("views.config.title") }}</h1>
    <p>{{ this.$t("views.config.text") }}</p>
    <dark-mode />
  </section>    
</template>

<script>
import DarkMode from '@/components/DarkMode'

export default {
  name: 'Config',
  components: { DarkMode }
}
</script>