import { Modal } from '@/components/modal';
import Image from 'next/image';
import confirmEmail from '@/assets/ConfirmEmail.png';
import logo from '@/assets/logos/sou-junior.svg';

type ModalEmailProps = React.HTMLAttributes<HTMLDivElement>;

export default function ModalEmail(props: ModalEmailProps) {
  return (
    <Modal.Content
      className="flex flex-col justify-center items-center relative w-full max-w-[25rem] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg gap-6 px-14 pt-7"
      {...props}
    >
      <header className="flex flex-col items-center">
        <Modal.Title className="text-blue-500 text-lg">
          Cheque seu e-mail
        </Modal.Title>
        <Image
          src={confirmEmail}
          alt="Garoto mexendo em nootebook"
          width={285}
          height={278}
          className="w-[17.8125rem] h-[17.375rem] -mt-2 -mb-[1.3rem]"
        />

        <Modal.Description className="text-[#666666] text-base text-center leading-[150%] max-w-[15.5rem]">
          Enviamos um email para você de confirmação.
        </Modal.Description>
      </header>

      <div className="flex items-center flex-col gap-[0.3rem] pb-5">
        <Image
          src={logo}
          alt="logo da SouJunior"
          width={108}
          height={17}
          className="w-[6.75rem] h-4"
        />
        <span className="text-blue-500 text-sm leading-[150%]">
          #MovimentoSouJunior
        </span>
      </div>

      <Modal.Close />
    </Modal.Content>
  );
}
