import { Session } from '@/features/auth/types/types';
import { cookies } from 'next/headers';
import OnBoardingClient from './OnBoardingClient';

export default async function OnBoardingPage() {
  const cookieStore = await cookies();
  const raw = cookieStore.get('session')?.value;
  const session: Session | null = raw ? JSON.parse(raw) : null;

  return <OnBoardingClient fullName={session?.fullName} />;
}
