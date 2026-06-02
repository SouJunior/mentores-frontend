'use client';

import { ModalAccountDeleted } from '@/features/account/modal-account-deleted';
import CalendlyRegister from '@/features/account/calendly';
import { DepoSection } from '@/features/home/depo-section';
import { Footer } from '@/layout/footer';
import { HeroSection } from '@/features/home/hero-section';
import { MentorSection } from '@/features/home/mentor-section';
import { Onboarding } from '@/features/home/onboarding';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function HomeClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);
  const { mentor, userSession } = useAuthContext();

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
      Boolean(userSession) &&
      mentor.data?.registerComplete === true;

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
  }, [mentor.data?.registerComplete, searchParams, userSession, router]);

  const handleCloseModal = () => {
    const calendlyClientId = 'N24tR3RHkxh41T1wX2Gxm0cK7BdyIWicqVuLGDLrVSo';
    const redirectUri = 'http://localhost:3000/calendly/callback';
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(mentor.data?.id))}`;

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
      <MentorSection />
      <DepoSection />
      <Footer />
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
