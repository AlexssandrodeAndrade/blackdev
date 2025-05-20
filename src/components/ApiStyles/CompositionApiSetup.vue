<template>Composition API Setup</template>

<script setup>
import {
  computed,
  defineProps,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue'

// Definir props corretamente (vazio, se não há nenhuma)
const props = defineProps()

// ref com valor inicial corretamente
const stateModal = ref(false)

// reactive corretamente com objeto direto (não precisa de 'target:')
const form = reactive({
  field_1: '',
  field_2: '',
})

// Alterna visibilidade do modal
const toggleModal = () => {
  stateModal.value = !stateModal.value
}

// computed sem uso de 'getter:' (sintaxe direta)
const fullName = computed(() => {
  return 'First Name' + ' ' + 'Last Name'
})

// watch corretamente
watch(stateModal, (newValue, oldValue) => {
  // todo: fazer algo quando o stateModal mudar
})

// Hooks de ciclo de vida
onBeforeMount(() => {
  // código antes de montar
})

onMounted(() => {
  // código após montagem
})

onBeforeUnmount(() => {
  // código antes de desmontar
})

onUnmounted(() => {
  // código após desmontar
})
</script>
