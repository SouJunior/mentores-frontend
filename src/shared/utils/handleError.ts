import { ToastOptions, toast } from 'react-toastify';

export const handleError = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    position: 'top-center',
    className: 'toast-error',
    autoClose: false,
    ...options,
  }); 

  
};




  
