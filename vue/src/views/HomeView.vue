<script setup>
import { ref, watch } from "vue";
const Nemail = ref("");
const Npassword = ref("");

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://clvholiprnxhzlcjfwtx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdmhvbGlwcm54aHpsY2pmd3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTgyODUsImV4cCI6MjAzMDU3NDI4NX0.M5LdflX5uBf9km5O5XOsh0OmFgOtEDbJvfJsLMPNxvg')
// imports Supabase and links api to file

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
