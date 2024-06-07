<script setup>
import { ref, watch } from "vue";
import { useAuthStore } from '@/stores/auth.js';
import { supabase } from '@/supabase.js'
const Uemail = ref("");
const Upassword = ref("");
const authStore = useAuthStore();

async function signInWithEmail() {
  const useremail= Uemail.value;
  const userpassword= Upassword.value;
  console.log(useremail, userpassword);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: useremail,
    password: userpassword,
    options: {
      emailRedirectTo: 'http://localhost:5173/home',
    },
  })
  if (error) {
      alert('Incorrect Login Credentials')
  } else {
    alert("Sign In completed.")
    authStore.login();
  }


}
</script>


<template>
  <form class="signupform">
  <input v-model="Uemail" type="input" />
  <br>
  <input v-model="Upassword" type="input" />
  <br>
  <button v-on:click="signInWithEmail()">Sign In</button>
  </form>
</template>

<style scoped>
.signupform{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>