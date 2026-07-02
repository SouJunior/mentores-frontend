import { serverFetch } from '@/shared/lib/fetch';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { MentorSection } from './index';

const HOME_MENTORS_PREVIEW_LIMIT = 8;

export async function MentorSectionLoader() {
  const [mentors, calendlyInfo] = await Promise.all([
    serverFetch<IMentors[]>('/mentor/registered', {
      tags: ['mentors'],
      auth: false,
    }).catch(() => []),
    serverFetch<ICalendlyUserInfo[]>('/calendly', {
      tags: ['calendly'],
      auth: false,
    }).catch(() => []),
  ]);

  const previewMentors = mentors.slice(0, HOME_MENTORS_PREVIEW_LIMIT);

  return <MentorSection mentors={previewMentors} calendlyInfo={calendlyInfo} />;
}
