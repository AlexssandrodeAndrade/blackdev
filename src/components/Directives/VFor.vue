<template>
  <h1>Diretiva v-for</h1>

  <table border="1">
    <tr>
      <td>Id</td>
      <td>Nome</td>
      <td>E-mail</td>
    </tr>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.nome }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>

  <select name="contact" v-model="form.contactForm">
    <option v-for="(type, index) in contactType" :key="index" :value="type.value">
      {{ index }} - {{ type.label }}
    </option>
  </select>
  <pre>{{ form }}</pre>
</template>

<script setup>
import { reactive } from 'vue'

const users = [
  {
    id: 1,
    nome: 'Alexssandro',
    email: 'alexssandro@projetosystem.com.br',
  },
  {
    id: 2,
    nome: 'Joãozinho',
    email: 'joaozinho@projetosystem.com.br',
  },
  {
    id: 3,
    nome: 'Mariazinha',
    email: 'mariazinha@projetosystem.com.br',
  },
]

const contactType = [
  { value: 'contact', label: 'Contato' },
  { value: 'without_connection', label: 'Sem conexão com a internet' },
  { value: 'internet_slow', label: 'Internet com Lentidão' },
]

const form = reactive({
  contactForm: '',
})
</script>
