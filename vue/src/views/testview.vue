<script setup>
  import { createClient } from '@supabase/supabase-js'
  import { ref, watch } from "vue";
  const supabase = createClient('https://jqyadqqblpixsptiwxbm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxeWFkcXFibHBpeHNwdGl3eGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0NDU5NjcsImV4cCI6MjAyOTAyMTk2N30.dwyKWPquBkG-kEyDGmft18Uu_EHGHyzudBnzVVaxK54');
 // imports Supabase and links api to file

async function signInWithEmail() {
  const emaillogged =ref("")
  const passwordlogged = ref("")
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'emaillogged',
    password: 'passwordlogged',
  })
};

</script>
  

<style scoped>
</style>


<template>
    <form v-on:submit.prevent="signInWithEmail()">
      <label for="email">Email:</label>
      <input type="input" v-model="emaillogged">
        <div>{{ email }}</div>
      <label for="password">Password:</label>
      <input type="input" v-model="passwordlogged">
      <br>
      <button type="submit">Log In</button>
    </form>
</template>