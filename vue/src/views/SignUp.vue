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
    options: {
      emailRedirectTo: 'http://localhost:5173/about',
    },
  })
  if (error) {
    alert("There was an error when creating your account.")
  } else {
    alert("Sign Up completed, please Sign In")
  }
}
</script>


<template>
      <div class="wrapper">

<nav>
  <RouterLink to="/" class="home"><img id="home" width="200rem" src="../public/Icon_Home.png" alt="Home"></RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/test">test</RouterLink>
  <RouterLink to="/wish">help me</RouterLink>
  <RouterLink to="/character">help me v32</RouterLink>
</nav>
</div>
  <input v-model="Nemail" type="input" />
  <br>
  <input v-model="Npassword" type="input" />
  <br>
  <p>Please note password must be at least 6 characters</p>
  <br>
  <button v-on:click="signUpNewUser();">Sign Up</button>
</template>
