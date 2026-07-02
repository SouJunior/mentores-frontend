'use client';

import { useSessionStore } from '@/shared/store/session-store';
import { parseSession } from '@/shared/utils/parse-session';
import { useEffect } from 'react';

function readSessionCookie(): string | undefined {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('session='))
    ?.split('=')[1];
}

export function SessionHydrator() {
  useEffect(() => {
    const session = parseSession(readSessionCookie());
    useSessionStore.getState().setSession(session);
  }, []);

  return null;
}
