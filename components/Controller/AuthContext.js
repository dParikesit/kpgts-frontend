import { createContext } from 'react'

export const AuthContext = createContext()

export const AuthValue = {
  Role: typeof window!=='undefined'? localStorage.getItem('role') : '',
  setRole: (newRole) => {
    localStorage.setItem('role', newRole)
  },
  removeRole: () => {
    localStorage.removeItem('role')
  }
}