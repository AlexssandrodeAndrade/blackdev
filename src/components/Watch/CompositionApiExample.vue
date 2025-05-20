<template>
  <h1>Watch</h1>

  <label for="">Nome do usuário: </label>
  <input type="text" v-model="form.name" />

  <label for="">Aceitar termos de uso</label>
  <input type="checkbox" v-model="form.terms" />

  <p>{{ form.terms }}</p>
  <p>{{ status }}</p>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const form = reactive({
  name: 'Alexssandro',
  terms: false,
})
const status = ref(null)

watch(
  () => form.terms,
  () => {
    status.value = 'Pesquisando...'

    setTimeout(() => {
      status.value = 'Aceito!'
    }, 3000)
  },
)
</script>
