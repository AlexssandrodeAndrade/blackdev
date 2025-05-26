<template>
  <h1>Titulo do meu card: {{ props.title }}</h1>

  <p>Saída do form.title: {{ form.title }}</p>
  <input type="text" v-model="form.title" />

  <p>Corpo do meu card: {{ props.body }}</p>

  <p>Quantidade de acessos: {{ props.access }}</p>

  <p>Status: {{ props.status }}</p>

  <p>Formato: {{ props.format }}</p>

  <CourseCard :title="props.title" :status="props.status" :access="props.access" />
</template>

<script setup>
import CourseCard from '@/components/props/CourseCard.vue'
import { reactive } from 'vue'
//const props = defineProps(['title', 'body','access','status'])

// const props = defineProps({
//   title: String,
//   body: String,
//   access: Number,
//   status: Boolean,
// })

// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     default: 'Valor Padão',
//   },
//   access: {
//     type: Number || String, //[Number, String]
//     default: 0,
//   },
//   status: {
//     type: Boolean,
//     required: true,
//   },
//   format: {
//     type: String,
//     required: true,
//   },
// })

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

const form = reactive({
  title: props.title,
})
</script>
