<template>
  <div>
<!--     <form class="form" id="form">
            <label for="email">Email:</label>
            <input type="text" class="email" id="email"/>
            <br>
            <label for="password">Password:</label>
            <input type="text" class="password" id="password"/>
            <br>
            <div class="LogIn">
                <button id="SignIn">Log In</button>
            </div>
        </form> -->
  </div>
</template>

<script setup>

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nrcrotoefzmagfjcjkcu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yY3JvdG9lZnptYWdmamNqa2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDk5NjAsImV4cCI6MjAyNzcyNTk2MH0.FUW8l47J6vtGxGPTKn5Yw8dEWYZ_WXB0CYGzMfy22yA')
// imports Supabase and links api to file

/* const { data, error } = await supabase.auth.signUp(
  {
    email: 'test@email.com',
    password: 'test-password',
    options: {
      data: {
        first_name: 'John',
        age: 27,
      }
    }
  }
);

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
};

async function signOut() {
  const { error } = await supabase.auth.signOut()
}; */

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'test@email.com',
    password: 'test-password',
    options: {
      // emailRedirectTo: 'https://example.com/welcome',
    },
  })
}
signUpNewUser()
</script>

<style scoped>

</style>