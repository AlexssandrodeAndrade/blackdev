<template>
  <h1>Watch</h1>

  <label for="">Aceitar termos de uso</label>
  <input type="checkbox" v-model="terms" />

  <p>{{ terms }}</p>
  <p>{{ status }}</p>
</template>

<script setup>
import { ref, watch } from 'vue'

const terms = ref(false)
const status = ref(null)

watch(terms, () => {
  status.value = 'Pesquisando...'

  setTimeout(() => {
    status.value = 'Aceito!'
  }, 3000)
})
</script>
