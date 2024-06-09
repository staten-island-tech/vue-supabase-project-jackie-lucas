<template>
    <nav>
        <RouterLink to="/character" class="home"><img id="home" src="../../public/Icon_Close.png" alt="Close">
        </RouterLink>
    </nav>
    <div class="charInfo">
        <h1 class="cdataName">{{ cdata.name }}
        </h1><img class="cdataRarity" :src="`../${cdata.rarity}.webp`" :alt="`${cdata.rarity} Stars`" />
        <h1 class="cdataLevel">Level {{ level }}</h1>

        <div class="cdataContainer">
            <img class="cdataType" :src="`../Type_${cdata.type}.webp`" :alt="`${cdata.type}`" />
            <img class="cdataPath" :src="`../Path_${cdata.path}.webp`" :alt="`${cdata.path}`" />
        </div>
    </div>
    <img class="cdataImg" :src="`../Character_${cdata.img}_Splash_Art.webp`" :alt="`${cdata.name} Splash Art`" />
    <div class="cdataStats">
        <p class="charHP"> HP: {{ charStat.HP }}</p>
        <p class="charATK"> ATK: {{ charStat.ATK }}</p>
        <p class="charDEF"> DEF: {{ charStat.DEF }}</p>
        <p class="charSPD"> SPD: {{ charStat.SPD }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { character } from '@/components/character';
import { supabase } from '@/supabase';

const cdata = ref({});
const charStat = ref([]);
const charName = ref('');
const route = useRoute();
const level = ref();
const user = ref();

async function getCharData() {
    charName.value = route.params.id;
    const { data } = await supabase.from('characterStats').select().eq('name', charName.value).single();
    charStat.value = data
    const newCharacter = character.flatMap(rarity => rarity.characters)
    cdata.value = newCharacter.find(char => char.name == charName.value);

    console.log('Character Stats:', charStat.value);
    console.log('Character Name:', charName.value);
    console.log('Character Data:', cdata.value)
}



async function supabaseLevel(name) {
    const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.value).single();
    console.log(data, "more")
    console.log(name, "char")
    level.value = data[name]
    console.log(level.value, "new")
}
onMounted(async () => {
    getCharData()
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.error('Error fetching user IDs:', error);
    } else {
        user.value = data.user.id;
        console.log(user.value, "id")
        await supabaseLevel(charName.value);
    }
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

html,
body,
template {
    margin: 0;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    top: 0;
}

.home, #home {
display: flex;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width:20%;
  height: auto;
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

.black {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: #181818;
}

p {
    font: bold 100% "Lato", sans-serif;
    display: inline-block;
    font-size: 30px;
}

.charInfo,
.cdataContainer,
.cdataImg,
.cdataStats,
.cardContainer {
    visibility: hidden;
}

.charInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 25%;
    z-index: 1;
    width: 30%;
    max-width: 80%;
}


.cdataContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 20%;
    width: 20%;
    height: auto;
    left: 5%;
}

.cdataType,
.cdataPath {
    width: 100%;
}

.cdataImg {
    position: absolute;
    z-index: 1;
    place-self: center;
    right: 1%;
    animation: slideLeft 1s ease-in-out 0s forwards;
    width: 45%;
}

.cdataStats {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    place-items: center;
    top: 45%;
    left: 10%;
    gap: 0.5rem;
}

.cdataName {
    animation: slideLeft 1s ease-in-out 1s forwards;
}

.cdataRarity {
    animation: slideLeft 1s ease-in-out 1.3s forwards;
}

.cdataLevel {
    animation: slideLeft 1s ease-in-out 2s forwards;
}

.cdataType {
    animation: slideLeft 1s ease-in-out 2.2s forwards;
}

.cdataPath {
    animation: slideLeft 1s ease-in-out 2.4s forwards;
}

.charHP {
    animation: slideLeft 0.5s ease-in-out 1s forwards;
}

.charATK {
    animation: slideLeft 0.5s ease-in-out 1.2s forwards;
}

.charDEF {
    animation: slideLeft 0.5s ease-in-out 1.4s forwards;
}

.charSPD {
    animation: slideLeft 0.5s ease-in-out 1.6s forwards;
}

@keyframes slideLeft {
    0% {
        transform: translateX(200%);
        opacity: 0;
        visibility: visible;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
}
</style>