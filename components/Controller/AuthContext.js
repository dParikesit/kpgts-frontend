import createContext from 'react'

export const AuthContext = createContext()

const role = ''

export const AuthValue = {
  Role: role,
  setRole: (newRole) => {
    role = newRole;
    localStorage.setItem('role', role)
  },
  removeRole: () => {
    role = '';
    localStorage.removeItem('role')
  }
}