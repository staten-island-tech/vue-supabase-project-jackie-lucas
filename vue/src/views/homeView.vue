<template>
    <video autoplay muted loop>
      <source class="video" src="../../public/train.mp4" type="video/mp4" />
    </video>
    <div class="wrapper">
<nav>
  <RouterLink to="/home" class="home"><img id="home" width="200rem" src="../../public/Icon_Home.png" alt="Home"></RouterLink>
  <div class="icons" id="icons">
          <RouterLink to="/wish" class="wish"><img id="warp" src="../../public/Icon_Warp.webp" alt="Wish"></RouterLink>
          <RouterLink to="/character" class="characters"><img id="characters" src="../../public/Icon_Characters.webp" alt="Characters"></RouterLink>
        </div>
  
</nav>
<button class="signoutbutton" v-on:click="signOutUser()">Sign Out</button>
</div>
</template>
  
<script setup>
import { useAuthStore } from '@/stores/auth.js';
import { supabase } from '@/supabase.js'
import { RouterLink, RouterView } from 'vue-router'
import {ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const videoplay = ref(false)
const authStore = useAuthStore();

async function signOutUser() {
const { error } = await supabase.auth.signOut({ scope: 'local' })
authStore.logout();
router.push('/');
};
</script>
  
<style scoped>
nav {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 99;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .signoutbutton{
    position: absolute;
    top: 0;
    right: 0;
  }
  .icons{
    margin-top:2%;
  }
  #warp, #characters{
    width: 15%;
  }
  </style>
  