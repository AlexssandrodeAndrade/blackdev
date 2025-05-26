<template>
  <h1>Componente keep Alive!</h1>
  <p>Contador: {{ cont }}</p>
  <button @click="cont++">Somar</button>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cont = ref(0)

onMounted(() => {
  console.log('Componente Montado!')
})

onUnmounted(() => {
  console.log('Componente Desmontado!')
})
</script>

<!-- appp chamada  -->
<!--
<template>
  <KeepAlive>
    <CompKeepAlive v-if="keepAlive" />
  </KeepAlive>
  <button @click="keepAlive = !keepAlive">Toggle</button>
</template>
<script setup>
import CompKeepAlive from './components/KeepAlive/CompKeepAlive.vue'
import { ref } from 'vue'

const keepAlive = ref(true)
</script>
-->
