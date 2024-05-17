<template>
    <div class="wish_Card">
      <img
        class="wish_img"
        :src="`./src/assets/Character_${wish.img}_icon.webp`"
        :alt="`${wish.name}`"
      />
      <img
        class="wish_rarity"
        :src="`./src/assets/${wish.rarity}.webp`"
        :alt="`${wish.rarity} Stars`"
      />
      <div class="wish_container">
        <img
          class="wish_path"
          :src="`./src/assets/Path_${wish.path}.webp`"
          :alt="`${wish.path}`"
        />
        <img
          class="wish_type"
          :src="`./src/assets/Type_${wish.type}.webp`"
          :alt="`${wish.type}`"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    wish: Object,
  });
  </script>
  
  <style scoped>
  .wish_Card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    width: 10rem;
    height: 10rem;
    background-color: rgb(40, 40, 40, 1);
    border: 0.2px solid rgb(255, 255, 0, 0);
    margin-left: 2rem;
    margin-right: 2rem;
    transition: 0.5s;
  }
  .wish_Card:hover {
    background-color: rgba(120, 120, 0, 0.6);
    z-index: -1;
  }
  .wish_container {
    display: flex;
    flex: wrap;
    flex-direction: row;
  }
  .wish_img {
    width: 0;
    height: auto;
  }
  .wish_rarity {
    width: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .wish_path,
  .wish_type {
    width: 0;
    height: auto;
  }
  </style>
  