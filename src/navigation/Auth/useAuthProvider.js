import {useEffect, useState} from 'react'
import {useSessionStorage} from '@hooks/useSessionStorage'
import {login, logout} from '@lib/api'

export function useAuthProvider() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useSessionStorage('userdetails', null)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const unsubscribe = () => {
      //...
      if (currentUser) {
        setIsAuth(true)
      }
      setIsLoading(false)
    }

    unsubscribe()
  }, [])

  const signIn = async (email, password) => {
    try {
      const res = await login({email, password})
      const user = res.data;
      setCurrentUser(user)
      setIsAuth(true)
    }
    catch (error) {
      if (error.response) {
        throw Error(error.response.data.message);
      }
      if (error.request) {
        throw Error("No response from server");
      } 
      else {
        console.error(error)
      }
    }
  }

  const signOut = async () => {
    revokeLoggedInSession()
    setCurrentUser(null)
    setIsAuth(false)
  }

  return {
    isLoading,
    currentUser,
    isAuth,
    signIn,
    signOut,
  }
}

export function setLoggedInSession(userDetails) {
  sessionStorage.setItem('userdetails', JSON.stringify(userDetails))
}

export function revokeLoggedInSession() {
  sessionStorage.removeItem('userdetails')
}

export function getLoggedInSession() {
  return JSON.parse(sessionStorage.getItem('userdetails'))
}
