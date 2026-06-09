import { serverFetch } from '@/shared/lib/fetch';
import { Session } from '@/shared/types/Auth';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ITestimony } from '@/shared/types/IUseTestimonyService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import HomeClient from './HomeClient';

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
