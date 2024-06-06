<template>
    <h1>{{ charStat.name }}</h1>
    <p> HP: {{ charStat.HP }}</p>
    <p> ATK: {{ charStat.ATK }}</p>
    <p> DEF: {{ charStat.DEF }}</p>
    <p> SPD: {{ charStat.SPD }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { character } from '@/components/character';
import { supabase } from '@/supabase';


const charStat = ref([])
const charName = ref('')
const route = useRoute();
    

async function getCharData() {    
    charName.value = route.params.id;
    const { data } = await supabase.from('characterStats').select().eq('name', charName.value).single();
    console.log(charStat)
    charStat.value = data
    console.log(charStat.value)
    console.log('character /',charName.value)
}

onMounted(()=> {
    getCharData()
})
</script>

<style scoped></style>