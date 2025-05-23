<template>
  <h1>Diretiva v-memo</h1>

  <p>O contador esta em {{ counter }}</p>
  <button @click="counter++">Somar</button>

    <p v-once>O contador esta em {{ counterVonce }}</p>
  <button @click="counterVonce++">Somar</button>

    <p v-memo="[counter]">O contador esta em {{ counterVmemo }}</p>
  <button @click="counterVmemo++">Somar</button>
</template>
<script setup>
import {ref} from 'vue'

const counter = ref(0)
const counterVonce = ref(0)
const counterVmemo = ref(0)

</script>
