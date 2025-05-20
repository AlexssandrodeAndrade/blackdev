<template>
  <h1>v-model</h1>

  <p>{{ form.name }}</p>
  <form @submit.prevent="SubmitForm">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="form.name" />

    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" v-model="form.email" />

    <button type="submit">Enviar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: 'Alexssandro',
  email: 'leko.alexssandro@gmail.com',
  type: 'password',
})

const SubmitForm = function () {
  console.log(form.name, form.email)
}
</script>
