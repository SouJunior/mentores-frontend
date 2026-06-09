import { serverFetch } from '@/lib/fetch';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
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
