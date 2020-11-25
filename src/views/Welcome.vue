<template>
    <section class="chat-content">
        <h1>Seja bem-vindo {{ user }}</h1>
        <p>A essa interface simples de chat criada com vue.js</p>
    </section>    
</template>

<script>
export default {
  name: 'Welcome',
  data () {
      return {
          user: 'Lucas Lima'
      }
  }
}
</script>