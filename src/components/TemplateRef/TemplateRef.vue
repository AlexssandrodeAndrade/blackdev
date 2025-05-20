<template>
  <h1>Template Ref</h1>

  <p id="welcome" ref="welcome">Hello Word!</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'
console.log('start na aplicação"')

const welcome = ref(null)

onMounted(() => {
  welcome.value.style.color = 'green'
})
</script>
