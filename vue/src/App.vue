<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'



const videoplay = ref(true);
const routershow = ref(true)
const route = useRoute();

watch(route, (newRoute) => {
  videoplay.value = newRoute.path === '/' || newRoute.path === '/login' || newRoute.path === '/signup' || newRoute.path === '/home';
  routershow.value = newRoute.path === '/' || newRoute.path === '/login' || newRoute.path === '/signup'
});
</script>

<template>
  <video v-if="videoplay" class="video" autoplay muted loop>
    <source src="../public/train.mp4" type="video/mp4" />
  </video>
  <nav v-if="routershow">
    <div class="routers">
      <RouterLink to="/signup">Sign Up</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </nav>
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

.routers {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
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
