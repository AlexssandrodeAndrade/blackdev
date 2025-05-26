<template>
  <h1>Componente User</h1>
  <UsersList />
</template>

<script setup lang="ts">
import UsersList from './UsersList.vue'
</script>

<!-- tem que ter no app para funcionar o inject app -->
<!-- <script setup>
import { provide } from 'vue'
import Users from './components/ProvideInject/Users.vue'

const users = [
  {
    id: 1,
    name: 'Leko',
  },
  {
    id: 2,
    name: 'Tati',
  },
  {
    id: 3,
    name: 'Bob',
  },
]
provide('users', users)
</script> -->
