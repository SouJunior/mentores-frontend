'use client';

import FormNewPass from '@/features/auth/components/form-new-pass';
import { Suspense } from 'react';

export default function SetNewPasswordPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-600">
      <Suspense>
        <FormNewPass />
      </Suspense>
    </div>
  );
}
