import { ScheduleTab } from '@/features/account/components/account-page/ScheduleTab';
import { serverFetch } from '@/shared/lib/fetch';
import { IMentor } from '@/shared/types/Auth';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';

export default async function SchedulePage() {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  const [mentor, calendlyInfo] = await Promise.all([
    serverFetch<IMentor>(`/mentor/${session!.id}`, { tags: ['mentor'] }),
    serverFetch<ICalendlyUserInfo>('/calendly/mentorInfo', {
      tags: ['calendly'],
    }),
  ]);

  return <ScheduleTab mentor={mentor} calendlyInfo={calendlyInfo} />;
}
