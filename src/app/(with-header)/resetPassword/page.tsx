'use client';

import FormEmailToReset from '@/features/auth/form-email-to-reset';
import { ResetPassContainer } from '@/styles/pages/resetPassword';

export default function ResetPasswordPage() {
  return (
    <ResetPassContainer>
      <FormEmailToReset />
    </ResetPassContainer>
  );
}
