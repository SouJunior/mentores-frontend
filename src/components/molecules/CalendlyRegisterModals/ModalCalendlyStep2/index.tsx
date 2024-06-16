import copyLinkEvent from '@/assets/modalCalendly/copyLinkEvent-v2.png';
import { Button } from '@/components/atoms/Button';
import StepperDots from '@/components/atoms/StepperDots';
import {
  ButtonsContainer,
  ModalButtonSecondary,
  ModalDescription,
  ModalImageContainer,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style';
import Image from 'next/image';
import Link from 'next/link';
import { SubDescription } from './style';

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
      <ModalTitle>Copie o link da sua agenda.</ModalTitle>
      <ModalDescription>
        Acesse sua conta no Calendly e copie o seu link, conforme exemplificado
        abaixo.
      </ModalDescription>
      <ModalImageContainer>
        <Image
          alt="Imagem de um evento dentro do Calendly com o mouse apontando para o botão nomeado de copiar link"
          src={copyLinkEvent}
          width={400}
          height={250}
          loading="eager"
        />
      </ModalImageContainer>
      <SubDescription>
        Dúvidas? Acesse o{' '}
        <Link
          href="https://help.calendly.com/hc/en-us/articles/223193448-Sharing-your-scheduling-link#sharing-your-scheduling-link-0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutorial completo.
        </Link>{' '}
      </SubDescription>
      <StepperDots currentStep={currentStep} />
      <ButtonsContainer>
        <Button as={ModalButtonSecondary} onClick={handlePreviousStep}>
          Voltar
        </Button>

        <Button
          as={Link}
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNextStep}
        >
          Ir para o Calendly
        </Button>
      </ButtonsContainer>
    </>
  );
}
