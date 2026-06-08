import React from 'react';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import Image from 'next/image';
import imagemParabens from '@/assets/modalCalendly/parabens.png';

type ModalCalendlyStep4Props = {
  handleCloseModal: () => void;
};

export default function ModalCalendlyStep4({
  handleCloseModal,
}: ModalCalendlyStep4Props) {
  return (
    <>
      <Modal.Title className="text-[1.4rem] text-[#323232] font-semibold leading-[140%] text-center px-16 mt-6 mx-auto">
        Parabéns!
      </Modal.Title>
      <Modal.Description className="text-[1.1rem] text-[#323232] leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16">
        Seu cadastro como mentor <br /> foi concluído com sucesso.
      </Modal.Description>
      <div className="flex items-center justify-center">
        <Image
          alt="Imagem de uma mulher comemorando com um dos braços erguido"
          src={imagemParabens}
          width={300}
          height={250}
          loading="eager"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={handleCloseModal} className="px-8">
          Fechar
        </Button>
      </div>
    </>
  );
}
