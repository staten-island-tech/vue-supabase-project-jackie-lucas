  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/superbaseClient';

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('food').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries(),signUpNewUser()
  })

  async function signUpNewUser() {  
const { data, error } = await supabase.auth.signUp({
  username: {username},
  password: 'example-password',
})
}
  </script>

  <template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.item_name }}</li>
    </ul>
    <form @submit.prevent="registerAnswer">
      <h6>Username</h6>
      <input type="text" placeholder="Username">
      <h6>Password</h6>
      <input type="password" placeholder="Password">
      <button @click="" type="submit" >Submit</button>
    </form>
  </template>