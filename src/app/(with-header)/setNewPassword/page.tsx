'use client';

import FormNewPass from '@/components/molecules/FormNewPass';
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
