<template>
  <h1>OptionsApi</h1>

  <p>O contador esta no número: {{ counter }}</p>

  <button @click="counter++">Somar</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  beforeCreate() {
    console.log('1 Options API - Before Created')
  },
  created() {
    console.log('2 Options API - Created')
  },
  beforeMount() {
    console.log('3 Options API - Before Mounted')
  },
  mounted() {
    console.log('4 Options API - Mounted')
  },
  beforeUpdate() {
    console.log('5 Options API - Before Update')
  },
  updated() {
    console.log('6 Options API - updated')
  },
  beforeUnmount() {
    console.log('7 Options API - Before Unmounted')
  },
  unmounted() {
    console.log('8 Options API - Unmounted')
  },
}
</script>
