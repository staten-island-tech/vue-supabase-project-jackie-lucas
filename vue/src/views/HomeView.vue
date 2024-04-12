  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/superbaseClient';

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('food').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })

  async function signUpNewUser() {  
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
}
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
signUpNewUser(), signOut()
  </script>

  <template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.item_name }}</li>
    </ul>
  </template>