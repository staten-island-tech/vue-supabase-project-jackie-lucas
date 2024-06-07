<template>
    <video autoplay muted loop>
      <source src="../../public/train.mp4" type="video/mp4" />
    </video>
    <div class="wrapper">
<nav>
  <RouterLink to="/" class="home"><img id="home" width="200rem" src="../public/Icon_Home.png" alt="Home"></RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/test">test</RouterLink>
  <RouterLink to="/wish">help me</RouterLink>
  <RouterLink to="/character">help me v32</RouterLink>
</nav>
</div>
  </template>
  
  <script setup></script>
  
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
  