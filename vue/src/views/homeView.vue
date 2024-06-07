<template>
    <video autoplay muted loop>
      <source class="video" src="../../public/train.mp4" type="video/mp4" />
    </video>
    <div class="wrapper">
<nav>
  <RouterLink to="/" class="home"><img id="home" width="200rem" src="../public/Icon_Home.png" alt="Home"></RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/test">test</RouterLink>
  <RouterLink to="/wish">help me</RouterLink>
  <RouterLink to="/character">help me v32</RouterLink>
  <button class="signoutbutton" v-on:click="signOutUser()">Sign Out</button>
</nav>
</div>
  </template>
  
<script setup>
import { useAuthStore } from '@/stores/auth.js';
import { supabase } from '@/supabase.js'
const authStore = useAuthStore();

async function signOutUser() {
const { error } = await supabase.auth.signOut({ scope: 'local' })
authStore.logout();
};
</script>
  
  <style scoped>
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  </style>
  