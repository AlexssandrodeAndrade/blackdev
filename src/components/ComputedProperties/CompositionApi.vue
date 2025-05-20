<template>
  <h1>ComputedProperties</h1>

  <input type="text" v-model="userFullName" />

  <p>O nome completo do usuário é: {{ user.fistName }} {{ user.lastName }}</p>
  <p>O nome completo do usuário é: {{ userFullName }}</p>

  <p>O valor do Pedido é: {{ order.price }}</p>
  <p>O valor do Pedido é: {{ orderPriceFormatted }}</p>
</template>

<script setup>
import { computed, reactive } from 'vue'

const user = reactive({
  fistName: 'Alexssandro',
  lastName: 'de Andrade',
})

// const userFullName = computed(() => {
//   return user.fistName + ' ' + user.lastName
// })

const userFullName = computed({
  get() {
    return user.fistName + ' ' + user.lastName
  },
  set(newValue) {
    user.fistName = newValue.split(' ')[0]
    user.lastName = newValue.split(' ')[1]
    if (newValue.split(' ')[2]) {
      user.lastName = newValue.split(' ')[1] + ' ' + newValue.split(' ')[2]
    }
  },
})

const order = reactive({
  price: 99700,
})

const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigitd: 2,
})

const orderPriceFormatted = computed(() => {
  return formatCurrency.format(order.price / 100)
})
</script>
