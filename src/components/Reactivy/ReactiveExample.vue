<template>
  <h1>Reactive Example</h1>
  <p>Contador: {{ form.counter }}</p>

  <button @click="sun">Somar</button>
  <button @click="sub">Subtrair</button>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  counter: 0,
})

const sun = function () {
  form.counter = form.counter + 1
}
const sub = function () {
  form.counter = form.counter - 1
}
</script>
