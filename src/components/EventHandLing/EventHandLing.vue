<template>
  <h1>EventHandLing</h1>

  <form action="https://google.com.br" @submit.prevent="submitForm">
    <label for="">Nome</label>
    <input type="text" name="nome" v-model="form.nome" @keyup.delete="showNotification" />

    <label for="">E-mail</label>
    <input type="email" name="email" v-model="form.email" />

    <button type="submit">Enviar Formulário</button>
    <input type="submit" value="Enviar Formulário" />
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: 'Alexssandro',
  email: 'alexssandro@gmail.com',
})

const submitForm = function () {
  console.log(form.nome, form.email)
  console.log('Código finalizado com sucesso!')
}
const showNotification = function () {
  alert('Você nao pode apagar o nome do usuário!')
}
</script>
