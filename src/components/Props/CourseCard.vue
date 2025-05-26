<template>
  <h1>Titulo do meu card: {{ props.title }}</h1>

  <p>Quantidade de acessos: {{ props.access }}</p>

  <p>Status: {{ props.status }}</p>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  access: {
    type: Number || String, //[Number, String]
    default: 0,
  },
  status: {
    type: Boolean,
    required: true,
  },
})
</script>

<!--  envio de informação para o pai do filho... isso tem q ficar no pai
import { reactive } from 'vue'
import CardEmit from './components/Props/CardEmit.vue'

const changeTitle = data => {
  card.title = data.name
}

const card = reactive({
  title: 'Esse é meu titulo',
  access: 123,
  status: true,
  format: 'user',
}) -->
