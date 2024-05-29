<template>
    <div class="wish_Card">
      <img
        class="wish_img"
        :src="`../../public/Character_${wish.img}_icon.webp`"
        :alt="`${wish.name}`"
      />
      <img
        class="wish_rarity"
        :src="`../../public/${wish.rarity}.webp`"
        :alt="`${wish.rarity} Stars`"
      />
      <div class="wish_container">
        <p class="wish_name">{{ wish.name }}</p>
        <img
          class="wish_path"
          :src="`../../public/Path_${wish.path}.webp`"
          :alt="`${wish.path}`"
        />
        <img
          class="wish_type"
          :src="`../../public/Type_${wish.type}.webp`"
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
    width: 20rem;
    height: 10rem;
    background-color: rgb(40, 40, 40, 1);
    border: 0.2px solid rgb(255, 255, 0, 0);
    margin-left: 2rem;
    margin-right: 2rem;
    transition: 0.5s;
    border-radius: 10px;
  }
  .wish_Card:hover {
    background-color: rgba(120, 120, 0, 0.6);
    z-index: -1;
  }
  .wish_container {
    display: flex;
    flex: wrap;
    flex-direction: column;
  }
  .wish_img {
    width: 10rem;
    height: auto;
    left: 0;
  }
  .wish_rarity {
    width: 4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .wish_name{
    font-size: 14px;
    top: 0;
    position: relative;
    align-items: center;
  }
  .wish_path,
  .wish_type {
    width: 4rem;
    height: auto;
  }
  </style>
  