import { PersonalInfoTab } from '@/features/account/components/account-page/PersonalInfoTab';
import { serverFetch } from '@/shared/lib/fetch';
import { IMentor } from '@/shared/types/Auth';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';

export default async function PersonalInfoPage() {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  const mentor = await serverFetch<IMentor>(`/mentor/${session!.id}`, {
    tags: ['mentor'],
  });

  return <PersonalInfoTab mentor={mentor} />;
}
