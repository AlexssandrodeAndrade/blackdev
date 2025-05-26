<template>
  <h2>Listagem de Usuários</h2>

  <ul>
    <li v-for="user in users" :key="user.id">#{{ user.id }} - {{ user.name }}</li>
  </ul>
</template>

<script setup>
import { inject } from 'vue'

const users = inject('users')
</script>
