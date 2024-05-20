<template>
    <img
      class="Character_bg" src="../../public/Wallpaper_Ingenium_Dreams.webp" alt="Wallpaper Ingenium Dreams"/>
    <div class="rarities">
      <div class="rarity" v-for="rarities in character" :key="rarities.rarity">
        <charCard
          v-for="char in rarities.characters"
          :key="char.name"
          :character="char"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import charCard from "@/components/card.vue";
  import { character } from "@/components/character.js";
  </script>
  
  <style scoped>
  .Character_bg {
    opacity: 0.2;
    width: 100%;
    height: auto;
    position: fixed;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  .rarities {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin: 0;
    left: 0;
    top: 10rem;
  }
  
  .rarity {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    place-items: center;
  }
  
  @media (max-width: 800px) {
    .rarities {
      top: 20rem;
    }
  }
  </style>
  