import { ModalAccountDeleted } from '@/components/molecules/ModalAccountDeleted';
import CalendlyRegister from '@/components/organisms/CalendlyRegister';
import { DepoSection } from '@/components/organisms/DepoSection';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { MentorSection } from '@/components/organisms/MentorSection';
import { Onboarding } from '@/components/organisms/Onboarding';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);
  const { mentor, userSession } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (
      router.isReady &&
      router.query['connect-calendly'] &&
      router.query['connect-calendly'] !== 'true'
    ) {
      const query = { ...router.query };
      delete query['connect-calendly'];

      router.replace({ pathname: '/', query }, undefined, {
        shallow: true,
      });
      return;
    }

    const openStatus =
      router.query['connect-calendly'] === 'true' &&
      Boolean(userSession) &&
      mentor.data?.registerComplete === true;

    setIsOpen(openStatus);

    const accountDeletedStatus = Boolean(router.query['account-deleted']);
    setIsAccountDeleted(accountDeletedStatus);

    const calendlyStatus = router.query['calendly'];
    if (calendlyStatus === 'success') {
      toast.success('Calendly conectado com sucesso!');
    }

    if (calendlyStatus === 'error') {
      toast.error('Ocorreu um erro ao conectar com o Calendly.');
    }
  }, [mentor.data?.registerComplete, router, router.query, userSession]);

  const handleCloseModal = () => {
    const calendlyClientId = 'N24tR3RHkxh41T1wX2Gxm0cK7BdyIWicqVuLGDLrVSo';
    const redirectUri = 'http://localhost:3000/calendly/callback';
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(mentor.data?.id))}`;

    window.location.href = calendlyAuthUrl;

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
