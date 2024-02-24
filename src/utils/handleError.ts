import { ToastOptions, toast } from 'react-toastify'

export const handleError = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    toastId: 'toast-error',
    ...options,
  })
}
