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
  <button v-on:click="signUpNewUser()">Sign Up</button> <!-- NO LONGER BROKEEEN REEL -->
</template>
