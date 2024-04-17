<template>
    <div>
      <form v-on:submit.prevent="signInWithEmail()">
        <p>
          Email:
          <input type="text" required placeholder="email" v-model="userEmail">
        </p>
        <p>
          Password:
          <input type="text" placeholder="password" v-model="userPassword">
        </p>
        <button type="submit">Log In</button>
      </form>
    </div>
  </template>
  
  
  <script setup>
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient('https://nrcrotoefzmagfjcjkcu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yY3JvdG9lZnptYWdmamNqa2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDk5NjAsImV4cCI6MjAyNzcyNTk2MH0.FUW8l47J6vtGxGPTKn5Yw8dEWYZ_WXB0CYGzMfy22yA');
 // imports Supabase and links api to file

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: this.userEmail,
    password: this.userPassword,
  })
};

  </script>
  
  <style scoped>
  
  </style>