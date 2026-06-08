'use client';

import FormNewPass from '@/features/auth/form-new-pass';
import { Suspense } from 'react';

export default function SetNewPasswordPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#175CB7]">
      <Suspense>
        <FormNewPass />
      </Suspense>
    </div>
  );
}
