<template>
  <h1>Options Api Example</h1>
  <p>Contador: {{ counter }}</p>

  <button @click="sun">Somar</button>
  <button @click="sub">Subtrair</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    sun: function () {
      this.counter = this.counter + 1
    },
    sub: function () {
      this.counter = this.counter - 1
    },
  },
}
</script>
