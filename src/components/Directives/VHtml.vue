<template>
  <h1>Diretiva v-html</h1>

  <p>{{ elemento }}</p>

  <p v-html="elemento"></p>
</template>
<script setup>
import { ref } from 'vue'
const elemento = ref('<b>Alexssandro</b>')
</script>
