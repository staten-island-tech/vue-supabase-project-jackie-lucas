<template>
  <div class="black"></div>
  <nav>
    <RouterLink to="/home" class="home"><img id="home" width="200rem" src="../../public/Icon_Home.png" alt="Home"></RouterLink>
  </nav>
  <img class="Character_bg" src="../../public/Wallpaper_Ingenium_Dreams.webp" alt="Wallpaper Ingenium Dreams" />
  <h1 class="instructions">Warp Characters to Increase Levels</h1>
  <div class="rarities">
    <div class="rarity" v-for="rarities in character" :key="rarities.rarity">
      <charCard v-for="char in rarities.characters" :key="char.name" :character="char" :userid="userid" />
    </div>
  </div>
</template>

<script setup>
import charCard from "@/components/card.vue";
import { character } from "@/components/character.js";
import { ref, onMounted, watch } from "vue";
import { supabase } from "@/supabase";

const userid = ref();

onMounted(async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error fetching user IDs:', error);
  } else {
    userid.value = data.user.id;
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.black {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  background-color: #181818;
}

.home {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 99;
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.instructions {
  position: absolute;
  top: 8%;
  place-self: center;
  font: bold 300% "Lato", sans-serif;
}

.Character_bg {
  opacity: 0.2;
  width: 100%;
  height: auto;
  position: fixed;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 1;
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
  z-index: 2;
}

@media (max-width: 800px) {
  .rarities {
    top: 20rem;
  }
}
</style>