<template>Composition Api</template>

<script>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue'

export default {
  setup(props) {
    const stateModal = ref(false)
    const form = reactive({
      field_1: '',
      field_2: '',
    })

    const toggleModal = function () {
      stateModal.value = !stateModal.value
    }

    const fullName = computed(() => {
      return 'Fist Name' + '' + 'Last Name'
    })

    const changeStateModal = watch(stateModal, (newValue, oldValue) => {
      //todo
    })

    onBeforeMount(() => {
      //
    })

    onMounted(() => {
      //
    })

    onBeforeUnmount(() => {
      //
    })

    onUnmounted(() => {
      //
    })

    return {
      props,
      stateModal,
      form,
      toggleModal,
      fullName,
      changeStateModal,
    }
  },
}
</script>
