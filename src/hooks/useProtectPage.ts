'use client';

import { getToken } from '@/lib/getToken';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useProtectPage() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      navigate.push('/');
    } else {
      setLoading(false);
    }
  }, [navigate, setLoading]);

  return loading;
}
