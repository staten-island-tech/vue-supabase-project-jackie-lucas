  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/superbaseClient';


  async function getCountries() {
    const { data } = await supabase.from('food').select()
    foodtable.value = data
    console.log(data)
  }

  onMounted(() => {

  })

  </script>

  <template>
    <ul>
      <li v-for="foodd in foodtable" :key="foodd.id">{{ foodd.name }}</li>
    </ul>
  </template>