import { toast } from 'react-toastify'

export const handleError = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    toastId: 'customId',
  })
}
