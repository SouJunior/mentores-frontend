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
    console.error(
      `Invalid error message key. The key "${currentMessageKey}" does not exists."`,
    )
    throw new Error(
      `Invalid error message key. The key "${currentMessageKey}" does not exists."`,
    )
  }

  handleError(message, options)
}
