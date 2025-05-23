<template>
<h1>Titulo do meu card: {{ props.title }}</h1>

<p>Corpo do meu card: {{ props.body }}</p>

<p>Quantidade de acessos: {{ props.access }}</p>

<p>Status: {{ props.status }}</p>

</template>

<script setup>
//const props = defineProps(['title', 'body','access','status'])

const props = defineProps ({
title: String,
body: String,
access: Number,
status: Boolean
})

</script>
