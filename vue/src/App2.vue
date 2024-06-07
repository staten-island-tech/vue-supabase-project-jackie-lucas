<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { supabase } from '@/supabase.js'

const authStore = useAuthStore();

async function signOutUser() {
  const { error } = await supabase.auth.signOut({ scope: 'local' })
  if (!error) {
    authStore.logout();
  }
}

const videoplay = ref(true);
const videoRef = ref(null);
const route = useRoute();

watch(route, (newRoute) => {
  if (newRoute.path !== '/') {
    videoplay.value = false;
    if (videoRef.value) {
      videoRef.value.pause();
    }
  } else {
    videoplay.value = true;
    if (videoRef.value) {
      videoRef.value.play();
    }
  }
});
</script>

<template>
  <div class="container">
    <video ref="videoRef" class="video" v-if="videoplay" autoplay muted loop>
      <source src="../../public/train.mp4" type="video/mp4" />
    </video>
    <nav>
      <div class="routers">
        <RouterLink to="/signup">Sign Up</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </div>
      <button @click="signOutUser" class="signoutbutton">Sign Out</button>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-color: black;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.signoutbutton {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}
.routers {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  z-index: 0;
}
nav a.router-link-exact-active {
  color: black;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 1rem;
}
nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
