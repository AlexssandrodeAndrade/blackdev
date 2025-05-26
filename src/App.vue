<template>
  <p>Saída do comando Date: {{ new Date() }}</p>
  <p>Data formatada: {{ useToDateFormat(new Date()) }}</p>
</template>
<script setup>
import { useToDateFormat } from './components/Composable/useToDateFormat'
</script>
