<script setup>
import { ref, watch } from "vue";
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js';
import { supabase } from '@/supabase.js'
const Uemail = ref("");
const Upassword = ref("");
const authStore = useAuthStore();
const router = useRouter();

async function signInWithEmail() {
  const useremail = Uemail.value;
  const userpassword = Upassword.value;
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
  <form class="loginform" @submit.prevent="signInWithEmail">
    <input id="email" v-model="Uemail" type="email" required placeholder="Email" />
    <br>
    <input id="password" v-model="Upassword" type="password" required placeholder="Password" />
    <br>
    <button type="submit" class="login-button">Sign In</button>
  </form>
</template>


<style scoped>
.loginform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 40%;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  align-self: flex-start;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background: #0056b3;
}
</style>