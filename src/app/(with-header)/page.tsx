import { DepoSectionLoader } from '@/features/home/components/depo-section/DepoSectionLoader';
import { DepoSectionSkeleton } from '@/features/home/components/depo-section/DepoSectionSkeleton';
import { HeroSection } from '@/features/home/components/hero-section';
import { MentorSectionLoader } from '@/features/home/components/mentor-section/MentorSectionLoader';
import { MentorSectionSkeleton } from '@/features/home/components/mentor-section/MentorSectionSkeleton';
import { Onboarding } from '@/features/home/components/onboarding';
import { Footer } from '@/shared/layout/footer';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { HomeInteractive } from './home/HomeInteractive';

export default async function Page() {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  return (
    <>
      <HeroSection />
      <Onboarding />
      <Suspense fallback={<MentorSectionSkeleton />}>
        <MentorSectionLoader />
      </Suspense>
      <Suspense fallback={<DepoSectionSkeleton />}>
        <DepoSectionLoader />
      </Suspense>
      <Footer />
      <Suspense>
        <HomeInteractive session={session} />
      </Suspense>
    </>
  );
}
