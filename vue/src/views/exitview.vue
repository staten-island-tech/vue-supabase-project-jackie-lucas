<template>
    <div>
        <p>hellow world</p>
        <br>
        <button v-on:click="signOutUser()">Sign Out</button>
    </div>
</template>

<script setup>
    import { supabase } from '@/supabase.js'

    async function signOutUser() {
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    
    };
</script>

<style scoped>

</style>