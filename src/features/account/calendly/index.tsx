import React from 'react';
import ModalCalendlyStep1 from '@/features/account/calendly-modals/ModalCalendlyStep1';
import ModalCalendlyStep2 from '@/features/account/calendly-modals/ModalCalendlyStep2';
import ModalCalendlyStep3 from '@/features/account/calendly-modals/ModalCalendlyStep3';
import ModalCalendlyStep4 from '@/features/account/calendly-modals/ModalCalendlyStep4';
import { Modal } from '@/components/modal';

type CalendlyRegisterProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleCloseModal: () => void;
};

export default function CalendlyRegister({
  isOpen,
  currentStep,
  setCurrentStep,
  handleNextStep,
  handlePreviousStep,
  handleCloseModal,
}: CalendlyRegisterProps) {
  return (
    <Modal.Root open={isOpen} onOpenChange={handleCloseModal}>
      <Modal.Content className="flex flex-col gap-3 p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative max-w-lg">
        {currentStep === 1 && (
          <ModalCalendlyStep1
            handleNextStep={handleNextStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && (
          <ModalCalendlyStep2
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 3 && (
          <ModalCalendlyStep3
            handlePreviousStep={handlePreviousStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 4 && (
          <ModalCalendlyStep4 handleCloseModal={handleCloseModal} />
        )}
        <Modal.Close className="top-6 right-6" />
      </Modal.Content>
    </Modal.Root>
  );
}
