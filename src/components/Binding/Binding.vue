<template>
  <h1>Bindings</h1>

  <input :type="input.type" :name="input.nameUser" />
  <button @click="showHidePassword">Mostrar/Ocutar Senha</button>
</template>
<script setup>
import { reactive } from 'vue'

const input = reactive({
  name: 'nameUser',
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
