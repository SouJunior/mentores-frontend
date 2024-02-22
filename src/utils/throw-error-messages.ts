import { ToastOptions } from 'react-toastify'
import { handleError } from './handleError'

interface ThrowErrorMessagesProps {
  messages: {
    [key: string | number]: string
  }
  currentMessageKey: string | number
  options?: ToastOptions
}

export function throwErrorMessages({
  messages,
  currentMessageKey,
  options,
}: ThrowErrorMessagesProps) {
  const message = messages[currentMessageKey]

  if (!message) {
    handleError('Algum erro aconteceu. Entre em contato com a gente.', options)
    return
  }

  handleError(message, options)
}
