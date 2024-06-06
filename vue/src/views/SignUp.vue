<template>
  <div>
    <form @submit.prevent>
    <input ref="user" type="text" placeholder="Username" required/>
    <input ref="pass" type="password" placeholder="Password" required/>
    <button @click="signUpNewUser" type="submit" >Sign Up</button>
  </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { supabase } from '@/supabase';
import { ref } from 'vue';
async function signUpNewUser() { 
  const user = ref()
  const pass = ref()
  const { data, error } = await supabase.auth.signUp({
  email: user,
  password: pass,
})
console.log("hi", data)
}

</script>

<style lang="scss" scoped>

</style>