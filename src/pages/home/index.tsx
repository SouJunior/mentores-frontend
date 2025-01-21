import { ModalAccountDeleted } from '@/components/molecules/ModalAccountDeleted';
import CalendlyRegister from '@/components/organisms/CalendlyRegister';
import { DepoSection } from '@/components/organisms/DepoSection';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { MentorSection } from '@/components/organisms/MentorSection';
import { Onboarding } from '@/components/organisms/Onboarding';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const openStatus = Boolean(router.query['connect-calendly']);
    setIsOpen(openStatus);

    const accountDeletedStatus = Boolean(router.query['account-deleted']);
    setIsAccountDeleted(accountDeletedStatus);
  }, [router.query]);

  const handleCloseModal = () => {
    router.replace('/', undefined, {
      shallow: true,
    });
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
