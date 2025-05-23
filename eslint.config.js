import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from '@vue/eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    rules: {
      'no-console': 'off', // permite console sem aviso
      'vue/multi-word-component-names': 'off', // permite nomes simples
      'no-unused-vars': 'off', // não reclama de variáveis não usadas
      'no-undef': 'off', // desliga o erro de variáveis não definidas
    },
  },
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  prettier,
])
