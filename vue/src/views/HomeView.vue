<script setup>
import { ref, watch } from "vue";
const Nemail = ref("");
const Npassword = ref("");
const perms = false

import { supabase } from '@/supabase.js'

  async function signUpNewUser() {
  const newemail= Nemail.value;
  const newpassword= Npassword.value;  
  const perms = true
  console.log(newemail, newpassword)
  const { data, error } = await supabase.auth.signUp({
    email: newemail,
    password: newpassword,
  })
}
</script>


<template>
  <input v-model="Nemail" type="input" />
  <br>
  <input v-model="Npassword" type="input" />
  <br>
  <p>Please note password must be at least 6 characters</p>
  <br>
  <button v-on:click="signUpNewUser();">Sign Up</button>
</template>
