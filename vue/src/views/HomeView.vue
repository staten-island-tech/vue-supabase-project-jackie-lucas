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
  </script>

  <template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.item_name }}</li>
    </ul>
  </template>