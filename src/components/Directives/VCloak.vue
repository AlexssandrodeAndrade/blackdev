<template>
  <h1>Diretiva v-cloak</h1>
<div v-cloak>
  <p>Olá {{user}}</p>
</div>
</template>
<script setup>

import {ref} from 'vue'

const user = ref('Alexssandro')
</script>

<style>
[v-cloak]{
  display: none;
}
</style>



