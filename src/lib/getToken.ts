'use client'

import { sessionNameUserInfo } from '@/data/static-info'

export const getToken = () => {
  return (
    localStorage.getItem(sessionNameUserInfo) ||
    sessionStorage.getItem(sessionNameUserInfo)
  )
}
