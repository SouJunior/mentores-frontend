import { X as CloseIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CustomToastProps {
  message: string;
  onClose?: () => void;
}

const ToastSuccess: React.FC<CustomToastProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleOverlayClick = () => {
    onClose?.();
    setVisible(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[9998] ${visible ? 'block' : 'hidden'}`}
        onClick={handleOverlayClick}
      />
      {visible && (
        <div className="flex justify-center items-center fixed top-1/2 left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-lg w-[400px] h-[207px] bg-white">
          <div className="flex justify-center flex-col items-center gap-[17px]">
            <div className="flex items-center relative">
              <div className="flex items-center justify-center">
                <Image
                  src={'/icons/arrowSuccess.svg'}
                  alt="Icone de Seta Sucesso"
                />
              </div>
              <div className="absolute right-[-12px] top-[-12px]">
                <CloseIcon
                  className="cursor-pointer"
                  onClick={handleOverlayClick}
                  style={{ color: '#5D5F5D' }}
                />
              </div>
            </div>
            <div className="text-[#149911] text-2xl font-medium text-center">
              Senha redefinida com sucesso!
            </div>
            <Link href="/login">
              <button className="px-14 py-3 border border-[#5D5F5D] text-[#5D5F5D] transition-all duration-300 ease-in-out bg-transparent text-base hover:scale-110">
                Ir para o login
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastSuccess;
