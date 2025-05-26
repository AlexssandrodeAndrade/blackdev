import{format} from 'date-fns'
import { ref, onMounted, onUnmounted, watch, watchEffect } from 'vue'


export function useToDateFormat(param){
const paramDate = ref('')

const formatParamenter = () => {
 paramDate.value = format(param, 'dd/MM/yyyy')
}

onMounted(()=> {
  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 69 ){
      paramDate.value = '16/09/1989'

    }
  })
})
onUnmounted(()=> {
  window.removeEventListener('keydown', () => {
    param = ''
    formatParamenter()
  })
})

watchEffect(()=>{
  formatParamenter()
})

return {paramDate}
}

//codigo que vai no app
/*
<template>
<p> Saída do comando Date: {{ new Date() }}</p>
<p> Saída do comando Date: {{ paramDate }}</p>
</template>
<script setup>
import { useToDateFormat } from './components/Composable/useToDateFormat';

const {paramDate} = useToDateFormat(new Date())
</script>
 */
