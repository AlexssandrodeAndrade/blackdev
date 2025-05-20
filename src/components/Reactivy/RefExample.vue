<template>
  <h1>Ref Example</h1>
  <p>Contador: {{ counter }}</p>

  <button @click="sun">Somar</button>
  <button @click="sub">Subtrair</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const sun = function () {
  counter.value = counter.value + 1
}
const sub = function () {
  counter.value = counter.value - 1
}
</script>
