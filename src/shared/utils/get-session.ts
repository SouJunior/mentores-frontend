import { serverFetch } from '@/shared/lib/fetch';
import { IMentor, Session } from '@/shared/types/Auth';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const cookieSession = parseSession(cookieStore.get('session')?.value);
  if (!cookieSession) return null;

  const mentor = await serverFetch<IMentor>(`/mentor/${cookieSession.id}`, {
    tags: ['mentor'],
  });

  return {
    id: cookieSession.id,
    fullName: mentor.fullName,
    profile: mentor.profile,
    profileKey: mentor.profileKey,
    registerComplete: cookieSession.registerComplete,
  };
}
