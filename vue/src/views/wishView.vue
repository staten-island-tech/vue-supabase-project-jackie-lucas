<template>
  <div class="container">
    <img class="Wish_bg" src="../../public/Wish_bg.avif" />
    <button :class="{ clear: on }" v-on:click="clear()">
      <img :class="{ Wish_close: on }" src="../../public/Icon_Close.png" />
    </button>
    <div class="WarpBtn">
      <button class="Warp1x" v-on:click="iteration(1)">Warp 1×</button>
      <button class="Warp10x" v-on:click="iteration(10)">Warp 10×</button>
    </div>
    <div class="banner_container">
      <img class="banner" src="../../public/Wallpaper_Banner.jpg" />
    </div>
    <div :class="{ wished: on }">
      <wishCard v-for="wish in wish_Char" :key="wish[i]" :wish="wish" />
    </div>
  </div>
</template>

<script setup>
import rates from "@/components/character.js";
import { character } from "@/components/character.js";
import { ref } from "vue";
import wishCard from "@/components/icon.vue";

const wish_Char = ref([]);
const on = ref(false);
function random_Rarity(rate) {
  let total = 0;
  for (let i = 0; i < rate.length; i++) {
    total += rate[i];
  }

  let rand = Math.random() * 100;
  let sum = 0;
  for (let i = 0; i < rate.length; i++) {
    sum += rate[i];
    if (rand < sum) {
      return i;
    }
  }
  return -1;
}
function iteration(times) {
  on.value = true;
  wish_Char.value = [];
  for (let i = 0; i < times; i++) {
    let rarity = random_Rarity(rates);
    let random_Character_Index = display_Char(
      character[rarity].characters.length
    );
    let random_Character = character[rarity].characters[random_Character_Index];
    wish_Char.value.push(random_Character);
  }
}

function display_Char(values) {
  return Math.floor(Math.random() * values);
}

function clear() {
  on.value = false;
  wish_Char.value = [];
}
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Wish_bg {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
  animation: fadeIn 3s;
}
.wished {
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  place-items: center;
  position: absolute;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.8);
}
.banner_container {
  position: absolute;
  top: 8%;
  transform: translateX(-150rem);
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  animation: slidein 1s forwards;
}
.banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  position: inherit;
  border-radius: 6rem 2rem 6rem 2rem;
  border: 2px solid rgb(0, 0, 0, 1);
  opacity: 0;
}

.WarpBtn {
  position: fixed;
  bottom: 3%;
  right: 5%;
  display: flex;
  width: 35%;
  gap: 1rem;
  animation: slideup 1s forwards, float 10s 1s infinite;
  z-index: 3;
}

.Warp1x,
.Warp10x {
  display: flex;
  border-radius: 2rem;
  padding: 2rem;
  width: 100%;
  height: 5vh;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(255, 255, 255, 1);
  transition: 0.5s;
  background-color: rgb(220, 220, 220, 1);
  font: bold 30px Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(175, 130, 250);
  overflow: hidden;
}
.Clear,
.Wish_close {
  display: flex;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 3rem;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border: 0;
  font: bold 30px Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(173, 129, 248);
  z-index: 100;
  background-color: transparent;
  transition: 0.5s;
}
.Clear:hover {
  border: 0;
  background-color: transparent;
  opacity: 20%;
}
.Warp1x:active,
.Warp10x:active {
  opacity: 80%;
  transition: 0s;
}

button:hover {
  box-sizing: border-box;
  cursor: pointer;
  background-color: rgba(98, 58, 255, 0.7);
  border: 2px solid rgb(100, 100, 100);
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    filter: blur(0px);
  }

  100% {
    filter: blur(5px);
  }
}

@keyframes slidein {
  to {
    transform: translateX(0rem);
  }
}

@keyframes slideup {
  from {
    transform: translateY(150rem);
  }
  to {
    transform: translateY(0);
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
