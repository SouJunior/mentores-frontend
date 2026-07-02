'use client';

import { Session } from '@/shared/types/Auth';
import { useSessionStore } from '@/shared/store/session-store';
import { useEffect } from 'react';

interface SessionHydratorProps {
  session: Session | null;
}

export function SessionHydrator({ session }: SessionHydratorProps) {
  useEffect(() => {
    useSessionStore.getState().setSession(session);
  }, [session]);

  return null;
}
