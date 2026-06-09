import { serverFetch } from '@/shared/lib/fetch';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { Suspense } from 'react';
import MentoresClient from './MentoresClient';

export default async function Page() {
  const [mentors, calendlyInfo] = await Promise.all([
    serverFetch<IMentors[]>('/mentor/registered', { tags: ['mentors'] }),
    serverFetch<ICalendlyUserInfo[]>('/calendly', { tags: ['calendly'] }),
  ]);

  return (
    <Suspense>
      <MentoresClient mentors={mentors} calendlyInfo={calendlyInfo} />
    </Suspense>
  );
}
