'use client';

import CalendlyRegister from '@/features/account/components/calendly';
import { ModalAccountDeleted } from '@/features/account/components/modal-account-deleted';
import { DepoSection } from '@/features/home/components/depo-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { MentorSection } from '@/features/home/components/mentor-section';
import { Onboarding } from '@/features/home/components/onboarding';
import { Session } from '@/shared/types/Auth';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ITestimony } from '@/shared/types/IUseTestimonyService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface HomeClientProps {
  testimonies: ITestimony[];
  session: Session | null;
  mentors: IMentors[];
  calendlyInfo: ICalendlyUserInfo[];
}

export default function HomeClient({
  testimonies,
  session,
  mentors,
  calendlyInfo,
}: HomeClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const connectCalendly = searchParams.get('connect-calendly');

    if (connectCalendly && connectCalendly !== 'true') {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('connect-calendly');
      const newUrl = params.toString() ? `/?${params.toString()}` : '/';
      router.replace(newUrl);
      return;
    }

    const openStatus =
      connectCalendly === 'true' &&
      Boolean(session) &&
      session?.registerComplete === true;

    setIsOpen(openStatus);

    const accountDeletedStatus = Boolean(searchParams.get('account-deleted'));
    setIsAccountDeleted(accountDeletedStatus);

    const calendlyStatus = searchParams.get('calendly');
    if (calendlyStatus === 'success') {
      toast.success('Calendly conectado com sucesso!');
    }

    if (calendlyStatus === 'error') {
      toast.error('Ocorreu um erro ao conectar com o Calendly.');
    }
  }, [searchParams, session, router]);

  const handleCloseModal = () => {
    const calendlyClientId = process.env.CALENDLY_CLIENT_ID || '';
    const redirectUri = process.env.CALENDLY_REDIRECT_URI || '';
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(session?.id))}`;

    window.location.href = calendlyAuthUrl;

    router.replace('/');
    setIsOpen(false);
    setIsAccountDeleted(false);
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection mentors={mentors} calendlyInfo={calendlyInfo} />
      <DepoSection testimonies={testimonies} />
      <CalendlyRegister
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        handleCloseModal={handleCloseModal}
      />
      <ModalAccountDeleted
        isOpen={isAccountDeleted}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
