import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';
import OnBoardingClient from './OnBoardingClient';

export default async function OnBoardingPage() {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  return <OnBoardingClient fullName={session?.fullName} />;
}
