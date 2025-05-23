<template>
  <h1>CompositionApi</h1>

  <p>O contador esta no número: {{ counter }}</p>
  <button @click="counter++">Somar</button>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  onUnmounted,
  ref,
} from 'vue'

const counter = ref(0)

onBeforeMount(() => {
  console.log('1 Composition API - Before Mounted')
})
onMounted(() => {
  console.log('2 Composition API - Mounted')
})
onBeforeUpdate(() => {
  console.log('3 Composition API - Before Update')
})
onUpdated(() => {
  console.log('4 Composition API - updated')
})
onBeforeUnmount(() => {
  console.log('5 Composition API - Before Unmounted')
})
onUnmounted(() => {
  console.log('6 Composition API - Unmounted')
})
</script>
