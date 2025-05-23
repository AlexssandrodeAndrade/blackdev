<template>
  <h1>Form</h1>

  <pre
    >{{ form }}
</pre
  >

  <form action="" @submit.prevent="submitForm">
    <label for="usu_nome">Nome: </label>
    <input type="text" name="usu_nome" id="usu_nome" v-model="form.usu_nome" />
    <br />
    <label for="usu_email">E-mail: </label>
    <input type="text" name="usu_email" id="usu_email" v-model="form.usu_email" />

    <br /><br />

    <textarea v-model="form.bio"></textarea>

    <br /><br />
    <label for="notification">Receber Notificações?</label>
    <input type="checkbox" name="notification" id="notification" v-model="form.notification" />

    <br /><br />

    <label for="skill">Qual sua habilidade?</label>

    <input type="radio" name="skill" value="backend" id="backend" v-model="form.skill" />
    <label for="backend">BackEnd</label>

    <input type="radio" name="skill" value="fontend" id="fontend" v-model="form.skill" />
    <label for="fontend">FontEnd</label>

    <input type="radio" name="skill" value="fullstack" id="fullstack" v-model="form.skill" />
    <label for="fullstack">FullStack</label>

    <br /><br />

    <label for="skill_select">Qual sua habilidade?</label>
    <select name="skill_select" id="skill_select" v-model="form.skill" @change="changeSkill">
      <option value="backend">BackEnd</option>
      <option value="fontend">FontEnd</option>
      <option value="fullstack">FullStack</option>
    </select>

    <br /><br />

    <button type="submit">Salvar</button>
  </form>
</template>
<script setup>
import { reactive } from 'vue'

/**
 *
 * $user = User::find('usu_email','alexssandro@teste.com.br')->first();
 * return view('user.edit',['user' => $user]) //blade
 * return response()->json($user) // json
 * return Inertia::render('Form.vue', ['user' => $user]) // Inertia
 */

//  const props = defineProps({
//   user:{
//     type: Object,
//     required: true,
//   }
// })

const props = {
  user: {
    usu_nome: 'Alexssandro',
    usu_email: 'alexssandro@teste.com.br',
    bio: 'Olá Mundo!',
    notification: true,
    skill: 'fullstack',
  },
}

const form = reactive({
  usu_nome: props.user.usu_nome,
  usu_email: props.user.usu_email,
  bio: props.user.bio,
  notification: props.user.notification,
  skill: props.user.skill,
})

function submitForm() {
  console.log('Formulario submetido! ')
}

function changeSkill() {
  console.log(form.skill)
}
</script>
