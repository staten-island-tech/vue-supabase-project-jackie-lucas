<template>
  <div>

  </div>
</template>

<script setup>

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nrcrotoefzmagfjcjkcu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yY3JvdG9lZnptYWdmamNqa2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDk5NjAsImV4cCI6MjAyNzcyNTk2MH0.FUW8l47J6vtGxGPTKn5Yw8dEWYZ_WXB0CYGzMfy22yA')
// imports Supabase and links api to file
//

const { data, error } = await supabase.auth.signUp(
  {
    email: 'example@email.com',
    password: 'example-password',
    options: {
      data: {
        first_name: 'John',
        age: 27,
      }
    }
  }
)

</script>

<style scoped>

</style>