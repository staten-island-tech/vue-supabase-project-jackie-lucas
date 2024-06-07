<script setup>
import { ref, watch } from "vue";
import { useRouter } from 'vue-router';
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
  })
  if (error) {
      alert('Incorrect Login Credentials')
  } else {
    alert("Sign In completed.")
    authStore.login();
    router.push('/home');
  }
}
</script>


<template>
  <form class="signupform" @submit.prevent="signInWithEmail">
    <input v-model="Uemail" type="email" placeholder="Email" />
    <br>
    <input v-model="Upassword" type="password" placeholder="Password" />
    <br>
    <button type="submit">Sign In</button>
  </form>
</template>


<style scoped>
</style>