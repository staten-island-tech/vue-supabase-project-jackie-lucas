<template>
  <div>
    <form @submit.prevent>
    <input ref="username" type="text" placeholder="Username" required/>
    <input ref="password" type="password" placeholder="Password" required/>
    <button @click="signUpNewUser(text, password)" type="submit" >Submit</button>
  </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { supabase } from '@/supabase';
import { ref } from 'vue';
const user = ref(null)
const pass = ref(null)
onMounted(() => {
 signUpNewUser()
})

async function signUpNewUser(signup) {  
const { data, error } = await supabase.auth.signUp({
username: user.value,
password: pass.value,
})
console.log("hi", data.user)
}

</script>

<style lang="scss" scoped>

</style>