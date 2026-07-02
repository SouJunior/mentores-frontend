'use client';

import { fetchSession } from '@/features/auth/actions/actions';
import { useSessionStore } from '@/shared/store/session-store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SessionHydrator() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    fetchSession().then(session => {
      if (!cancelled) useSessionStore.getState().setSession(session);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
