import { CircleCheck, Info, X } from 'lucide-react';
import { CSSProperties, MouseEvent } from 'react';
import { ToastOptions, cssTransition, toast } from 'react-toastify';

const toastStyle: CSSProperties = {
  width: '39.4rem',
  maxWidth: 'calc(100vw - 2rem)',
  minHeight: '3.5rem',
  padding: '0.75rem 1rem',
  marginTop: '5rem',
  fontWeight: 600,
  boxShadow: 'none',
};

const iconProps = { size: 22, strokeWidth: 2.5 };

const fadeTransition = cssTransition({
  enter: 'animate-in fade-in-0 slide-in-from-top-2 duration-400 ease-out',
  exit: 'animate-out fade-out-0 fill-mode-forwards duration-600 ease-in',
});

function CloseButton({
  closeToast,
}: {
  closeToast: (event: MouseEvent<HTMLElement>) => void;
}) {
  return (
    <button
      type="button"
      onClick={closeToast}
      aria-label="Fechar aviso"
      className="ml-auto shrink-0 self-center opacity-70 transition-opacity hover:opacity-100"
    >
      <X size={18} strokeWidth={2.5} />
    </button>
  );
}

const baseOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 6000,
  transition: fadeTransition,
  closeButton: CloseButton,
};

export const toastMessageSuccess = (message = 'Alterações salvas') =>
  toast(message, {
    ...baseOptions,
    icon: <CircleCheck {...iconProps} />,
    style: {
      ...toastStyle,
      backgroundColor: 'var(--color-green-400)',
      color: 'var(--color-green-800)',
    },
  });

export const toastMessageDiscarded = (message = 'Alterações descartadas') =>
  toast(message, {
    ...baseOptions,
    icon: <Info {...iconProps} />,
    style: {
      ...toastStyle,
      backgroundColor: 'var(--color-yellow)',
      color: 'var(--color-brown-300)',
    },
  });
