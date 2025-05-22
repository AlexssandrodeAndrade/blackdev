<template>
  <h1>Bindings</h1>

  <input :type="input.type" :id="input.id" :name="input.nomeUser" :placeholder="input.placeholder" />
  <button @click.prevent="showHidePassword">Mostrar/Ocutar Senha</button>
</template>
<script setup>
import { reactive } from 'vue'

const input = reactive({
  id: 'nomeUser',
  name: 'nomeUser',
  type: 'password',
  placeholder: 'Digite um nome aqui',
})

const showHidePassword = function () {
  if (input.type === 'text') {
    input.type = 'password'
  } else {
    input.type = 'text'
  }
}
</script>
