import { Modal } from '@/shared/components/modal';
import Image from 'next/image';

type ModalResetPass = React.HTMLAttributes<HTMLDivElement>;

export default function ModalResetPass(props: ModalResetPass) {
  return (
    <Modal.Content
      className="flex justify-center items-center flex-col max-w-[25rem] w-full shadow-card px-6 pt-7 pb-8 relative"
      {...props}
    >
      <Modal.Title className="text-blue-500 text-lg">
        Cheque seu email
      </Modal.Title>
      <Modal.Close />

      <div className="w-[17.825rem] h-[17.825rem] [&_img]:h-full">
        <Image
          src={'/ConfirmEmail.png'}
          alt="Garoto mexendo em notebook"
          width={285}
          height={278}
        />
      </div>
      <Modal.Description className="text-gray-700 text-sm text-center leading-[150%] -mt-4 mb-4">
        Enviamos para você um e-mail com as instruções para redefinir sua senha.
      </Modal.Description>
      <div>
        <Image
          src={'/logos/sou-junior.svg'}
          alt="logo da SouJunior"
          width={108}
          height={17}
        />
      </div>
    </Modal.Content>
  );
}
