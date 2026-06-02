'use client';

import FormNewPass from '@/features/auth/form-new-pass';
import { SetPassContainer } from '@/styles/pages/setNewPassword';
import { Suspense } from 'react';

export default function SetNewPasswordPage() {
  return (
    <SetPassContainer>
      <Suspense>
        <FormNewPass />
      </Suspense>
    </SetPassContainer>
  );
}
