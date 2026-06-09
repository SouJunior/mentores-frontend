import { serverFetch } from '@/shared/lib/fetch';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { MentorSection } from './index';

export async function MentorSectionLoader() {
  const [mentors, calendlyInfo] = await Promise.all([
    serverFetch<IMentors[]>('/mentor/registered', { tags: ['mentors'] }),
    serverFetch<ICalendlyUserInfo[]>('/calendly', { tags: ['calendly'] }),
  ]);

  return <MentorSection mentors={mentors} calendlyInfo={calendlyInfo} />;
}
