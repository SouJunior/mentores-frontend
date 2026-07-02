import { serverFetch } from '@/shared/lib/fetch';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { MentorSection } from './index';

export async function MentorSectionLoader() {
  const [mentors, calendlyInfo] = await Promise.all([
    serverFetch<IMentors[]>('/mentor/registered', {
      tags: ['mentors'],
      auth: false,
    }),
    serverFetch<ICalendlyUserInfo[]>('/calendly', {
      tags: ['calendly'],
      auth: false,
    }),
  ]);

  return <MentorSection mentors={mentors} calendlyInfo={calendlyInfo} />;
}
