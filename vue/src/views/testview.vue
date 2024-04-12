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

         <button v-on:click="signOut()">Hi</button>
    </div>
  </template>
  
  <script setup>
  
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient('https://nrcrotoefzmagfjcjkcu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yY3JvdG9lZnptYWdmamNqa2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDk5NjAsImV4cCI6MjAyNzcyNTk2MH0.FUW8l47J6vtGxGPTKn5Yw8dEWYZ_WXB0CYGzMfy22yA')
  // imports Supabase and links api to file

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  };
  console.log("passed1")
  signOut()
  console.log("passed2")

  </script>
  
  <style scoped>
  
  </style>