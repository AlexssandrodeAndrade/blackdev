<template>
  <div v-if="loaded === false">Carregando!</div>
  <div v-else>Listagem de Usuário Completa!</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(async () => {
  loaded.value = false
  await listUser()
  loaded.value = true
})

const listUser = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('chegou aqui')
      resolve()
    }, 3000)
  })
}
</script>

<!-- codigo do app
<template>
    <SuspenseComponent />
</template>
<script setup>
import SuspenseComponent from './components/Suspense/SuspenseComponent.vue'
</script> -->
