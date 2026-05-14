'use client';

import { useAuthContext } from '@/context/Auth/AuthContext';
import { getToken } from '@/lib/getToken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useProtectPage() {
  const router = useRouter();
  const { userSession } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      setLoading(true);
      router.replace('/');
      return;
    }

    setLoading(false);
  }, [router, userSession]);

  return loading;
}
