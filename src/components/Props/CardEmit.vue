<template>
  <h1>Titulo do meu card: {{ props.title }}</h1>
  <button @click.prevent="emitEventForUpdateTitle">Alterar o Titulo</button>
  <p>Corpo do meu card: {{ props.body }}</p>

  <p>Quantidade de acessos: {{ props.access }}</p>

  <p>Status: {{ props.status }}</p>

  <p>Formato: {{ props.format }}</p>
</template>

<script setup>
const emit = defineEmits(['updateTitle'])

// const emit = defineEmits({
//   updateTitle: data => {
//     if (data.name) {
//       return true
//     }
//     return false
//   },
// })

const emitEventForUpdateTitle = () => {
  emit('updateTitle', { name: 'Alex - Vue.js!' })
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    default: 'Valor Padão',
  },
  access: {
    type: [Number, String],
    default: 0,
  },
  status: {
    type: Boolean,
    required: true,
  },
  format: {
    type: String,
    required: true,
    validator(value) {
      return ['post', 'user'].includes(value)
    },
  },
})
</script>
