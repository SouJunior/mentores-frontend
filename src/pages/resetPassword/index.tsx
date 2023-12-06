import FormEmailToReset from '@/components/molecules/FormEmailToReset'
import { ResetPassContainer } from '../../styles/pages/resetPassword'

function ResetPassword() {
  return (
    <ResetPassContainer>
      <FormEmailToReset />
    </ResetPassContainer>
  )
}

export default ResetPassword
