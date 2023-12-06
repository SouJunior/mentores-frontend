import { useContext } from 'react'
import { AuthContent } from './AuthContext'

export default function useUser() {
  const context = useContext(AuthContent)
  if (context === undefined) {
    throw new Error('Ocorreu algum erro no provider!')
  }
  return context
}
