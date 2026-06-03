import Image from 'next/image';
import confirmEmail from '@/assets/ConfirmEmail.png';
import logo from '@/assets/logos/sou-junior.svg';
import { Modal } from '@/components/modal';

type ModalResetPass = React.HTMLAttributes<HTMLDivElement>;

export default function ModalResetPass(props: ModalResetPass) {
  return (
    <Modal.Content
      className="flex justify-center items-center flex-col max-w-[25rem] w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-6 pt-7 pb-8 relative"
      {...props}
    >
      <Modal.Title className="text-blue-500 text-lg">
        Cheque seu email
      </Modal.Title>
      <Modal.Close />

      <div className="w-[17.825rem] h-[17.825rem] [&_img]:h-full">
        <Image
          src={confirmEmail}
          alt="Garoto mexendo em notebook"
          width={285}
          height={278}
        />
      </div>
      <Modal.Description className="text-[#666666] text-sm text-center leading-[150%] -mt-4 mb-4">
        Enviamos para você um e-mail com as instruções para redefinir sua senha.
      </Modal.Description>
      <div>
        <Image src={logo} alt="logo da SouJunior" width={108} height={17} />
      </div>
    </Modal.Content>
  );
}
