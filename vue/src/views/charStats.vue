<template>
    <div class="charInfo">
        <h1 class="cdataName">{{ cdata.name }}</h1>
        <img class="cdataRarity" :src="`../../public/${cdata.rarity}.webp`" :alt="`${cdata.rarity} Stars`" />
        <div class="cdataContainer">
            <img class="cdataType" :src="`../../public/Type_${cdata.type}.webp`" :alt="`${cdata.type}`" />
            <img class="cdataPath" :src="`../../public/Path_${cdata.path}.webp`" :alt="`${cdata.path}`" />
        </div>
    </div>
    <img class="cdataImg" :src="`../../public/Character_${cdata.img}_Splash_Art.webp`" :alt="`${character.name} Splash Art`" />
    <div class="cdataStats">
        <p class="charHP"> HP {{ charStat.HP }}</p>
        <p class="charATK"> ATK {{ charStat.ATK }}</p>
        <p class="charDEF"> DEF{{ charStat.DEF }}</p>
        <p class="charSPD"> SPD {{ charStat.SPD }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { character } from '@/components/character';
import { supabase } from '@/supabase';

const cdata = ref({})
const charStat = ref([])
const charName = ref('')
const route = useRoute();

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

onMounted(() => {
    getCharData()
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

html,
body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    top: 0;
}
p{
    font: bold 100% "Lato", sans-serif;
    display: inline-block;
    font-size: 16px
}
.charInfo,
.cdataContainer,
.cdataImg,
.cdataStats {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
}

.charInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    padding: 20px;
    border-radius: 10px;
    z-index: 1;
    animation: slideRight 1s ease-in-out forwards;
}
.cdataContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    animation: slideRight 1s ease-in-out 0.5s forwards;
}
.cdataImg{
    position: absolute;
    justify-self: center;
    align-items: center;
    z-index: 1;
    top: 0;
    right: 5%;
    animation: slideRight 1s ease-in-out 0s forwards;
    width: 55%;
}
.cdataType,
.cdataPath {
    width: 5%;
}
.cdataStats{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    left: 10%;
    gap: 1rem;
}
.charHP{
animation: slideRight 1s ease-in-out 1.5s forwards;
}
.charATK{
    animation: slideRight 1s ease-in-out 2s forwards;
}
.charDEF{
    animation: slideRight 1s ease-in-out 2.5s forwards;
}
.charSPD{
    animation: slideRight 1s ease-in-out 3s forwards;
}
@keyframes slideRight {
    from {
        transform: translateX(200%);
        opacity: 0;
        visibility: visible;
    }
    to {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
}
</style>