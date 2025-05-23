<template>
  <h1>Diretiva v-text</h1>

  <p>O nome do usuário é {{ user }}</p>
  <span>{{ user }}</span>
  <br />
  <span v-text="user"></span>
  <p>O nome do usuário é <span v-text="user"></span></p>
</template>

<script setup>
import { ref } from 'vue'

const user = ref('Alexssandro')
</script>
