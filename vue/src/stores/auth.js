import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/supabase.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: true,
  }),

  actions: {
    async checkAuth() {
      const session = supabase.auth.session();
      if (session) {
        this.user = session.user;
      }
      this.loading = false;
    },
    
    

    async signIn(email, password) {
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) {
        alert('Incorrect Login Credentials')
      } else {
        this.checkAuth()
      }
    },

    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Sign out error:', error.message)
      } else {
        this.user = null
      }
    },
  },
})
