<template>
  <h1>Diretiva v-once</h1>

  <p v-once> O nome do usuário é {{ userName }}</p>

  <button @click="userName = 'Batiman'">Mudar de nome</button>
</template>

<script setup >
import {ref} from 'vue'

const userName = ref('Alexssandro')
</script>
