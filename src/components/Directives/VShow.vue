<template>
  <h1>Diretiva v-show</h1>

  <div v-if="test">
    <p>Esse parégrafo está utilizando o v-if.</p>
  </div>

  <div v-show="test">
    <p>Esse parégrafo está utilizando o v-show.</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const test = ref(false)
</script>
