import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import StepperDots from '@/shared/components/stepper-dots';

type ModalCalendlyStep1Props = {
  handleNextStep: () => void;
  currentStep: number;
};

export default function ModalCalendlyStep1({
  handleNextStep,
  currentStep,
}: ModalCalendlyStep1Props) {
  return (
    <>
      <Modal.Title className="text-[1.4rem] text-black-200 font-semibold leading-[140%] text-center px-16 mt-6 mx-auto">
        Falta pouco para <br /> você se tornar um mentor.
      </Modal.Title>
      <Modal.Description className="text-[1.1rem] text-black-200 leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16">
        Disponibilize seus horários, compartilhando sua agenda do Calendly.
      </Modal.Description>
      <StepperDots currentStep={currentStep} />
      <div className="flex items-center justify-center gap-4">
        <Button onClick={handleNextStep} className="px-8">
          Próximo
        </Button>
      </div>
    </>
  );
}
