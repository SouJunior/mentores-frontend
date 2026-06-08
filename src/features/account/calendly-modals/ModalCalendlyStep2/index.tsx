import copyLinkEvent from '@/assets/modalCalendly/copyLinkEvent-v2.png';
import { Button } from '@/components/button';
import StepperDots from '@/components/stepper-dots';
import { Modal } from '@/components/modal';
import Image from 'next/image';
import Link from 'next/link';

type ModalCalendlyStep2Props = {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  currentStep: number;
};

export default function ModalCalendlyStep2({
  handleNextStep,
  handlePreviousStep,
  currentStep,
}: ModalCalendlyStep2Props) {
  return (
    <>
      <Modal.Title className="text-[1.4rem] text-[#323232] font-semibold leading-[140%] text-center px-16 mt-6 mx-auto">
        Copie o link da sua agenda.
      </Modal.Title>
      <Modal.Description className="text-[1.1rem] text-[#323232] leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16">
        Acesse sua conta no Calendly e copie o seu link, conforme exemplificado
        abaixo.
      </Modal.Description>
      <div className="flex items-center justify-center">
        <Image
          alt="Imagem de um evento dentro do Calendly com o mouse apontando para o botão nomeado de copiar link"
          src={copyLinkEvent}
          width={400}
          height={250}
          loading="eager"
        />
      </div>
      <p className="text-[1.1rem] text-[#323232] leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16 [&_a]:text-[#1165BA]">
        Dúvidas? Acesse o{' '}
        <Link
          href="https://help.calendly.com/hc/en-us/articles/223193448-Sharing-your-scheduling-link#sharing-your-scheduling-link-0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutorial completo.
        </Link>{' '}
      </p>
      <StepperDots currentStep={currentStep} />
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="secondary"
          onClick={handlePreviousStep}
          className="px-8"
        >
          Voltar
        </Button>
        <Button
          as={Link}
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNextStep}
          className="px-8"
        >
          Ir para o Calendly
        </Button>
      </div>
    </>
  );
}
