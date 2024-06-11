'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sessionNameUserInfo } from '@/data/static-info'

export function useProtectPage() {
  const navigate = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token =
      localStorage.getItem(sessionNameUserInfo) ||
      sessionStorage.getItem(sessionNameUserInfo)

    if (!token) {
      navigate.push('/')
    } else {
      setLoading(false)
    }
  }, [navigate, setLoading])

  return loading
}
