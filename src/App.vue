<template>
 <h1>Transition</h1>

<button @click="toggle = !toggle">Toggle</button>

<div v-if="toggle">
  <TransitionComponent />
</div>
</template>
<script setup>
import TransitionComponent from './components/Transition/TransitionComponent.vue'
import {ref} from 'vue'

const toggle = ref(true)

</script>
