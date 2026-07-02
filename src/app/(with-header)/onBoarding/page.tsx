import { getSession } from '@/shared/utils/get-session';
import OnBoardingClient from './OnBoardingClient';

export default async function OnBoardingPage() {
  const session = await getSession();

  return <OnBoardingClient fullName={session?.fullName} />;
}
