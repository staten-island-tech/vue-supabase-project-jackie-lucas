<script setup>
import { ref, watch } from "vue";
const Uemail = ref("");
const Upassword = ref("");

import { supabase } from '@/supabase.js'

async function signInWithEmail() {
  const logged = false
  const useremail= Uemail.value;
  const userpassword= Upassword.value;
  console.log(useremail, userpassword);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: useremail,
    password: userpassword,
  })
  if (error) {
      alert('Incorrect Login Credentials')
  };
}
</script>


<template>
  <input v-model="Uemail" type="input" />
  <br>
  <input v-model="Upassword" type="input" />
  <br>
  <button v-on:click="signInWithEmail()">Sign In</button>
</template>