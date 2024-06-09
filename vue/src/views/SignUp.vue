<script setup>
import { ref, watch } from "vue";
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase.js'

const Nemail = ref("");
const Npassword = ref("");
const perms = false
const router = useRouter();



async function signUpNewUser() {
  const newemail = Nemail.value;
  const newpassword = Npassword.value;
  const perms = true
  console.log(newemail, newpassword)
  const { data, error } = await supabase.auth.signUp({
    email: newemail,
    password: newpassword,
  })
  if (error) {
    alert("There was an error when creating your account.")
  } else {
    alert("Sign Up completed, please Sign In")
    router.push('/login');
  }
}
</script>


<template>
  <form class="signupform" @submit.prevent="signUpNewUser">
    <input id="email" v-model="Nemail" type="email" required placeholder="Email" />
    <br>
    <input id="password" v-model="Npassword" type="password" required placeholder="Password" minlength="6" />
    <br>
    <button type="submit" class="signup-button">Sign Up</button>
  </form>
</template>

<style scoped>
.signupform {
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

.signupform input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.signupform .note {
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;
}

.signupform .signup-button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.signupform .signup-button:hover {
  background: #0056b3;
}
</style>