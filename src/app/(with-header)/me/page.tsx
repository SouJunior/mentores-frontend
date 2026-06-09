import { IMentor, Session } from '@/features/auth/types/types';
import { serverFetch } from '@/lib/fetch';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import MeClient from './MeClient';

export default async function Page() {
  const cookieStore = await cookies();
  const raw = cookieStore.get('session')?.value;
  const session: Session | null = raw ? JSON.parse(raw) : null;

  if (!session?.id) redirect('/login');

  const [mentor, calendlyInfo] = await Promise.all([
    serverFetch<IMentor>(`/mentor/${session.id}`, { tags: ['mentor'] }),
    serverFetch<ICalendlyUserInfo>('/calendly/mentorInfo', {
      tags: ['calendly'],
    }),
  ]);

  return (
    <Suspense>
      <MeClient mentor={mentor} calendlyInfo={calendlyInfo} />
    </Suspense>
  );
}
