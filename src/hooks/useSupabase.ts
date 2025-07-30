// hooks/useSupabase.ts - HOOK SUPABASE POUR NEXT.JS/REACT
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

// ✅ CLIENT SUPABASE SINGLETON
let supabaseClient: any = null

export const useSupabase = () => {
  if (supabaseClient) {
    return supabaseClient
  }

  // ✅ CRÉER LE CLIENT SUPABASE AVEC LES VARIABLES D'ENVIRONNEMENT
  supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return supabaseClient
}

// ✅ HOOK POUR VÉRIFIER L'AUTHENTIFICATION
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const supabase = useSupabase()
      const { data: { user: currentUser }, error } = await supabase.auth.getUser()
      
      if (currentUser && !error) {
        setIsLoggedIn(true)
        setUser(currentUser)
      } else {
        setIsLoggedIn(false)
        setUser(null)
      }
    } catch (error) {
      console.warn('Erreur vérification auth:', error)
      setIsLoggedIn(false)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkAuth()
      
      // Écouter les changements d'auth depuis le localStorage
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key?.includes('supabase')) {
          checkAuth()
        }
      }

      window.addEventListener('storage', handleStorageChange)
      
      // Vérifier périodiquement (toutes les 10 secondes)
      const interval = setInterval(checkAuth, 10000)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        clearInterval(interval)
      }
    }
  }, [])

  return {
    isLoggedIn,
    user,
    loading,
    checkAuth
  }
}