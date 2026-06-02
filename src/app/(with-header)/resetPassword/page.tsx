'use client';

import FormEmailToReset from '@/components/molecules/FormEmailToReset';
import { ResetPassContainer } from '@/styles/pages/resetPassword';

export default function ResetPasswordPage() {
  return (
    <ResetPassContainer>
      <FormEmailToReset />
    </ResetPassContainer>
  );
}
