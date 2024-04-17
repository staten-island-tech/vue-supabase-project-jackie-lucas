<template>
  <div>
     <form class="form" id="form">
            <label for="email">Email:</label>
            <input type="text" class="email" id="email"/>
            <br>
            <label for="password">Password:</label>
            <input type="text" class="password" id="password"/>
            <br>
            <div class="LogIn">
                <button id="SignIn" type="button" v-on:click="signInWithEmail()">Log In</button>
            </div>
        </form>
  </div>
</template>

<script>

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

const DOMselectors = {
    form : document.getElementById("form"),
    Email : document.getElementById("email"),
    Pass : document.getElementById("password"),
};
function callvalue(){
    const callEmail = DOMselectors.Email.value;
    const callPass = DOMselectors.Pass.value;

    return{
        email1: callEmail,
        password1: callPass,
    };
}
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email1,
      password: password1,
    })
    console.log(email1, password1)
  }


</script>

<style scoped>

</style>