<script setup>
import { ref, watch } from "vue";
const Uemail = ref("");
const Upassword = ref("");

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://clvholiprnxhzlcjfwtx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdmhvbGlwcm54aHpsY2pmd3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTgyODUsImV4cCI6MjAzMDU3NDI4NX0.M5LdflX5uBf9km5O5XOsh0OmFgOtEDbJvfJsLMPNxvg')
// imports Supabase and links api to file

async function signInWithEmail() {
  const useremail= Uemail.value;
  const userpassword= Upassword.value;
  console.log(useremail, userpassword);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: useremail,
    password: userpassword,
    //    email: Uemail.toString(),
    //    password: Upassword.toString(),
  })
};
</script>


<template>
  <input v-model="Uemail" type="input" />
  <input v-model="Upassword" type="input" />
  <br>
  <button v-on:click="signInWithEmail()">HIWORKPLS</button>
</template>