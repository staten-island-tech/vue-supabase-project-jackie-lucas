<template>
    <div class="wish_Card">
      <img
        class="wish_img"
        :src="`../Character_${wish.img}_icon.webp`"
        :alt="`${wish.name}`"
      />
      <img
        class="wish_rarity"
        :src="`../${wish.rarity}.webp`"
        :alt="`${wish.rarity} Stars`"
      />
      <div class="wish_container">
        <img
          class="wish_path"
          :src="`../Path_${wish.path}.webp`"
          :alt="`${wish.path}`"
        />
        <img
          class="wish_type"
          :src="`../Type_${wish.type}.webp`"
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
    width: 8rem;
    height: 25rem;
    clip-path: ellipse(8rem 10rem at 50% 50%);
    background-color: rgb(40, 40, 40, 1);
    border: 0.2px solid rgb(255, 255, 0, 0);
    margin: 0;
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
    width: 98%;
    height: auto;
  }
  .wish_rarity {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .wish_path,
  .wish_type {
    width: 50%;
    height: auto;
  }
  </style>
  