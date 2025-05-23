<template>
<h1>Diretiva v-pre</h1>

<p>O nome do usuário é {{ user }}</p>

<p v-pre>O nome do usuário é {{ Alexssandro }}</p>

</template>

<script setup>
import {ref } from 'vue'

const user = ref('Alexssandro')
</script>
