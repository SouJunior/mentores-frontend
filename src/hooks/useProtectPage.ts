'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getToken } from '@/lib/getToken'

export function useProtectPage() {
  const navigate = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!getToken()) {
      navigate.push('/')
    } else {
      setLoading(false)
    }
  }, [navigate, setLoading])

  return loading
}
