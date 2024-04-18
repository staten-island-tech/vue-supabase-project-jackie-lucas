<template>
  <div>
    <form @submit.prevent>
    <input ref="user" type="text" placeholder="Username" required/>
    <input ref="pass" type="password" placeholder="Password" required/>
    <button @click="signUpNewUser()" type="submit" >Sign Up</button>
  </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { supabase } from '@/supabase';
import { ref } from 'vue';
onMounted(() => {
const user = ref()
const pass = ref()
console.log(user)
})
async function signUpNewUser() { 

const { data, error } = await supabase.auth.signUp({
username: user,
password: pass,
})
console.log("hi", data)
}

</script>

<style lang="scss" scoped>

</style>