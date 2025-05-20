<template>
  <h1>ComputedProperties (OptionsApi)</h1>

  <input type="text" v-model="userFullNameWritable" />

  <p>O nome do usuário é: {{ user.firstName }} {{ user.lastName }}</p>
  <p>O nome do usuário é: {{ userFullName }}</p>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Alexssandro',
        lastName: 'de Andrade',
      },
    }
  },
  computed: {
    userFullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },

    userFullNameWritable: {
      get() {
        return this.user.fistName + ' ' + this.user.lastName
      },
      set(newValue) {
        this.user.fistName = newValue.split(' ')[0]
        this.user.lastName = newValue.split(' ')[1]
        const lastNameLast = newValue.split(' ')[2]
        if (lastNameLast) {
          this.user.lastName = newValue.split(' ')[1] + ' ' + lastNameLast
        }
      },
    },
  },
}
</script>
