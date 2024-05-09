<script setup>
import { ref, watch } from "vue";
const Nemail = ref("");
const Npassword = ref("");

import { supabase } from '@/supabase.js'

  async function signUpNewUser() {
  const newemail= Nemail.value;
  const newpassword= Npassword.value;  
  console.log(newemail, newpassword)
  const { data, error } = await supabase.auth.signUp({
    email: newemail,
    password: newpassword,
  })
}
</script>


<template>
  <input v-model="Nemail" type="input" />
  <input v-model="Npassword" type="input" />
  <br>
  <button v-on:click="signUpNewUser()">HIWORKPLS</button>
</template>
