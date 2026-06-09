import { Session } from '@/features/auth/types/types';
import { serverFetch } from '@/lib/fetch';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ITestimony } from '@/services/interfaces/IUseTestimonyService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import HomeClient from './home/HomeClient';

export default async function Page() {
  const [testimonies, mentors, calendlyInfo] = await Promise.all([
    serverFetch<ITestimony[]>('/testimony', { tags: ['testimonies'] }),
    serverFetch<IMentors[]>('/mentor/registered', { tags: ['mentors'] }),
    serverFetch<ICalendlyUserInfo[]>('/calendly', { tags: ['calendly'] }),
  ]);

  const cookieStore = await cookies();
  const raw = cookieStore.get('session')?.value;
  const session: Session | null = raw ? JSON.parse(raw) : null;

  return (
    <Suspense>
      <HomeClient
        testimonies={testimonies}
        session={session}
        mentors={mentors}
        calendlyInfo={calendlyInfo}
      />
    </Suspense>
  );
}
