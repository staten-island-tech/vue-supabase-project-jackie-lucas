<template>
  <nav><RouterLink to="/home" class="home"><img id="home" width="200rem" src="../../public/Icon_Home.png" alt="Home"></RouterLink></nav>
  <div class="container">
    <img class="Wish_bg" src="../../public/Wish_bg.avif" />
      <button class="clear" v-if="on" v-on:click="clear()">
        <img class="Wish_close" v-if="on" src="../../public/Icon_Close.png" />
      </button>
    <div class="WarpBtn">
      <button class="Warp1x" v-on:click="char_Rarity(1)">Warp 1×</button>
      <button class="Warp10x" v-on:click="char_Rarity(10)">Warp 10×</button>
    </div>
    <div class="banner_container">
      <img class="banner" src="../../public/Wallpaper_Banner.jpg" />
    </div>
    <video class="warpVideo" v-if="fiveStar" autoplay @ended="hideRoll" ref="video">
      <source src="../../public/fivestarpulled.mp4" type="video/mp4" />
    </video>

    <video class="warpVideo" v-if="fourStar" autoplay @ended="hideRoll" ref="video">
      <source src="../../public/fourstarpulled.mp4" type="video/mp4" />
    </video>

    <video class="warpVideo" v-if="threeStar" autoplay @ended="hideRoll" ref="video" volume="1000">
      <source src="../../public/threestarpulled.mp4" type="video/mp4" />
    </video>

    <button class=skip v-if="fiveStar" v-on:click="skipVideo">
      <img class="Skip_wish" v-if="fiveStar" src="../../public/Skip_Button.webp" />
    </button>
    <button class=Skip v-if="fourStar" v-on:click="skipVideo">
      <img class="Skip_wish" v-if="fourStar" src="../../public/Skip_Button.webp" />
    </button>
    <button class=Skip v-if="threeStar" v-on:click="skipVideo">
      <img class="Skip_wish" v-if="threeStar" src="../../public/Skip_Button.webp" />
    </button>
    
    <img class="vignette" v-if="on" src="../../public/Warp_Result.webp" />
    <div class="wished" v-if="on">
      <wishCard v-for="wish in wish_Char" :key="wish.value" :wish="wish" />
    </div>
  </div>
</template>

<script setup>
import rates from "@/components/character.js";
import { character } from "@/components/character.js";
import { ref } from "vue";
import wishCard from "@/components/icon.vue";
import { supabase } from '@/supabase';

const on = ref(false);
const fiveStar = ref(false);
const fourStar = ref(false);
const threeStar = ref(false);
const wish_Char = ref([]);
const user = ref();

const video = ref(null);
function skipVideo(){
  video.value.currentTime = video.value.duration;
}
function hideRoll() {
  fiveStar.value = false;
  fourStar.value = false;
  threeStar.value = false;
  on.value = true
}
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
function char_Rarity(times) {
  iteration(times)
}
async function iteration(times) {
  wish_Char.value = [];
  for (let i = 0; i < times; i++) {
    let rarity = random_Rarity(rates);
    let random_Character_Index = display_Char(
      character[rarity].characters.length
    );
    let random_Character = character[rarity].characters[random_Character_Index];
    wish_Char.value.push(random_Character);
  }
  if (wish_Char.value.some(wishedChar => wishedChar.rarity == 5)) {
  fiveStar.value = true;
  const fiveStarChar = wish_Char.value.find(char => char.rarity == 5);
  console.log(fiveStar.value, "five", fiveStarChar.name);
} else if (wish_Char.value.some(wishedChar => wishedChar.rarity == 4)) {
  fourStar.value= true;
  const fourStarChar = wish_Char.value.find(char => char.rarity == 4);
  console.log(fourStar.value, "four", fourStarChar.name);
} else if (wish_Char.value.some(wishedChar => wishedChar.rarity == 3)) {
  threeStar.value= true;
  const threeStarChar = wish_Char.value.find(char => char.rarity == 3);
  console.log(threeStar.value, "three", threeStarChar.name);
}
const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error fetching user IDs:', error);
  } else {
    user.value = data.user.id;
    console.log(user.value, "id")
    await supabaseLevel(wish_Char.value);
  }
}

async function supabaseLevel(char_List) {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', user.value).single();
    console.log(data,"more")
  console.log(wish_Char.value, "list")
  char_List.forEach(async (character) => {
    const char_Name = character.name;
  console.log(char_Name)
  const newValue = data[char_Name] + 1;
  console.log(newValue,"new")
  const { data: updatedData, error: updateError } = await supabase
      .from('profiles')
      .update({ [char_Name]: newValue })
      .eq('id', user.value)
      .single();

    if (updateError) {
      console.error('Error updating data:', updateError);
    } else {
      console.log(`Updated ${char_Name} to ${newValue}`);
    }
})}


function display_Char(values) {
  return Math.floor(Math.random() * values);
}

function clear() {
  on.value = false;
  wish_Char.value = [];
}

</script>

<style scoped>
div,
button,
img {
  overflow: hidden;
}

html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
a{
  background-color: transparent;
}
.home {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 2;
  padding: 0;
  margin: 0;
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
.warpVideo {
  z-index: 91;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.Wish_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
  animation: fadeIn 3s;
  z-index: 1;
}

.vignette {
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 1);
}

.wished {
    top: 5%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    row-gap: 1rem;
    column-gap: 0rem;
    width: 120%;
    height: 80%; 
    overflow: hidden;
    z-index: 3;
    position: absolute;
    margin: auto; 
    padding: 2rem;
}

.banner_container {
  top: 8%;
  transform: translateX(-150rem);
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  animation: slidein 1s forwards;
  z-index: 2;
}

.banner {
  z-index: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  position: inherit;
  border-radius: 6rem 2rem 6rem 2rem;
  border: 2px solid rgb(0, 0, 0, 1);
}

.WarpBtn {
  position: fixed;
  bottom: 3%;
  right: 5%;
  display: flex;
  width: 35%;
  gap: 1rem;
  animation: slideup 1s forwards, float 10s 1s infinite;
  z-index: 4;
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
  z-index: inherit;
}

.Clear,
.Wish_close , .skip, .Skip_wish{
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
  z-index: 90;
  background-color: transparent;
  transition: 0.5s;
}
.Clear:hover {
  border: 0;
  background-color: transparent;
  opacity: 20%;
}

.skip, .Skip_wish{
  display: flex;
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  width: 2rem;
  height: auto;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border: 0;
  font: bold 30px Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(173, 129, 248);
  z-index: 99;
  background-color: transparent;
  transition: 0.5s;
  filter: invert(1);
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
