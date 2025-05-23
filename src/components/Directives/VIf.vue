<template>
  <h1>Directiva v-if</h1>

  <div v-if="user.is_admin === true">
    <p>Seja muito bem vindo administrador</p>
  </div>

  <div v-else-if="user.is_active === true">
    <p>Olá usuário, tudo bem com você!</p>
  </div>

  <div v-else>
    <p>Você precisa validar sua conta antes de continuar!</p>
  </div>

  <hr />

  <button @click="tab = 'A'">Gestão de Aluno</button>
  <button @click="tab = 'B'">Matrículas</button>
  <button @click="tab = 'C'">Remover Usuário</button>

  <div>
    <div v-if="tab === 'A'">
      <p>Gestão de Aluno</p>
    </div>

    <div v-else-if="tab === 'B'">
      <MatriculasTeste />
    </div>

    <div v-else>
      <p>Remover Usuário</p>
    </div>
  </div>
</template>

<script setup>
import MatriculasTeste from './MatriculasTeste.vue'
import { reactive, ref } from 'vue'

const user = reactive({
  is_admin: true,
  is_active: false,
})

const tab = ref('A')
</script>
