<template>Listagem de Usuário Completa!</template>

<script setup>
const listUser = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('chegou aqui')
      resolve()
    }, 3000)
  })
}
await listUser()
</script>

<!-- codigo do app
<template>
  <Suspense>
    <template #fallback> Carregando! </template>
    <template #default>
      <ComponentSuspenseApp />
    </template>
  </Suspense>
</template>
<script setup>
import ComponentSuspenseApp from './components/Suspense/ComponentSuspenseApp.vue'
</script> -->
