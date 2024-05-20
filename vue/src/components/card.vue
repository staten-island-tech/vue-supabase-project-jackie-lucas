<template>
    <div class="card">
      <h1 class="name">{{ character.name }}</h1>
      <img
        :src="`../Character_${character.img}_Splash_Art.webp`"
        :alt="`${character.name} Splash Art`"
      />
      <img
        class="rarity"
        :src="`../${character.rarity}.webp`"
        :alt="`${character.rarity} Stars`"
      />
      <div class="path_container">
        <img
          class="path"
          :src="`../Path_${character.path}.webp`"
          :alt="`${character.path}`"
        />
        <p>Path: {{ character.path }}</p>
      </div>
      <div class="type_container">
        <img
          class="type"
          :src="`../Type_${character.type}.webp`"
          :alt="`${character.type}`"
        />
        <p>Type: {{ character.type }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    character: Object,
  });
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  
  body,
  html {
    box-sizing: border-box;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin: 2rem 2rem 1.5rem 2rem;
    transition: 1s;
    border: 3px solid rgb(255, 255, 255, 0);
    padding: 0.9rem;
    background-color: rgb(0, 0, 0, 0.05);
  }
  .card:hover {
    border: 3px solid rgb(255, 255, 255, 0.1);
    box-shadow: 0 0 4rem 0.8rem rgba(100, 84, 0, 0.8);
    background-color: rgba(0, 0, 100, 0.1);
  }
  img {
    width: 15rem;
    height: auto;
    object-fit: cover;
  }
  
  .path,
  .type {
    display: inline-block;
    width: 2rem;
    height: auto;
  }
  .path_container,
  .type_container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.1rem;
  }
  .card h1 {
    font: bold 120% "Lato", sans-serif;
  }
  
  .card p {
    font: normal 100% "Lato", sans-serif;
    display: inline-block;
  }
  
  .rarity {
    width: 5rem;
    height: auto;
  }
  </style>
  