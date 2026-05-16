import { ModalAccountDeleted } from '@/components/molecules/ModalAccountDeleted';
import CalendlyRegister from '@/components/organisms/CalendlyRegister';
import { DepoSection } from '@/components/organisms/DepoSection';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { MentorSection } from '@/components/organisms/MentorSection';
import { Onboarding } from '@/components/organisms/Onboarding';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { redirectToCalendlyOAuth } from '@/utils/calendlyOAuth';
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
      mentor?.data?.registerComplete === true;

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
  }, [mentor?.data?.registerComplete, router, router.query, userSession]);

  const handleDismissCalendlyModal = () => {
    const query = { ...router.query };
    delete query['connect-calendly'];

    router.replace({ pathname: '/', query }, undefined, {
      shallow: true,
    });
    setIsOpen(false);
    setCurrentStep(1);
  };

  const handleCloseAccountDeletedModal = () => {
    const query = { ...router.query };
    delete query['account-deleted'];

    router.replace({ pathname: '/', query }, undefined, {
      shallow: true,
    });
    setIsAccountDeleted(false);
  };

  const handleCompleteCalendlyModal = () => {
    const startedOAuth = redirectToCalendlyOAuth(mentor?.data?.id);

    if (!startedOAuth) {
      toast.error('Não foi possível iniciar a conexão com o Calendly.');
      return;
    }

    handleDismissCalendlyModal();
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
        handleCloseModal={handleCompleteCalendlyModal}
        handleDismissModal={handleDismissCalendlyModal}
      />
      <ModalAccountDeleted
        isOpen={isAccountDeleted}
        handleCloseModal={handleCloseAccountDeletedModal}
      />
    </>
  );
}
