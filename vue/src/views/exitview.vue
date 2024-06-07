<template>
    <div>
        <p>hellow world</p>
        <br>
        <button v-on:click="signOutUser()">Sign Out</button>
    </div>
</template>

<script setup>
    import { supabase } from '@/supabase.js'
    import { useAuthStore } from '@/stores/auth.js';

    const authStore = useAuthStore();

    async function signOutUser() {
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    authStore.logout();
    };
</script>

<style scoped>

</style>