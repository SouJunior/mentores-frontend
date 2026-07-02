import { DepoSectionLoader } from '@/features/home/components/depo-section/DepoSectionLoader';
import { DepoSectionSkeleton } from '@/features/home/components/depo-section/DepoSectionSkeleton';
import { HeroSection } from '@/features/home/components/hero-section';
import { MentorSectionLoader } from '@/features/home/components/mentor-section/MentorSectionLoader';
import { MentorSectionSkeleton } from '@/features/home/components/mentor-section/MentorSectionSkeleton';
import { Onboarding } from '@/features/home/components/onboarding';
import { Suspense } from 'react';
import { HomeInteractive } from './HomeInteractive';

export default function Page() {
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
      <Suspense>
        <HomeInteractive />
      </Suspense>
    </>
  );
}
