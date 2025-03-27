import { createContext, useCallback, useState } from 'react'
import { localStorageKeys } from '../config/localStorageKeys'

interface AuthContextValue {
  signedIn: boolean
  signin: (accessToken: string) => void
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    return !!localStorage.getItem(localStorageKeys.ACCESS_TOKEN)
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken)
    localStorage.getItem(localStorageKeys.ACCESS_TOKEN)
  }, [])

  return (
    <AuthContext.Provider value={{ signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  )
}
