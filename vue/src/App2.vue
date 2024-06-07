<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/stores/auth.js';

    const authStore = useAuthStore();

    async function signOutUser() {
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    authStore.logout();
    };
/* import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
}) */
</script>

<template>
      <video class="video" autoplay muted loop>
      <source class="video" src="../../public/train.mp4" type="video/mp4" />
    </video>
    <div class="container">
      <nav>
        <div class="routers">
        <RouterLink to="/signup">Sign Up</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </div>
      </nav>
    </div>
  <RouterView />
</template>

<style scoped>
.container {
  position: relative; /* Ensure container acts as positioning context */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 0; /* Ensure container is at the bottom of stacking order */
}
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10000000;
  }
.signoutbutton{
  position: absolute;
  top: 0;
  right: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.routers {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute  ;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
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
