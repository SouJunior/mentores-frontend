'use client';

import FormEmailToReset from '@/features/auth/components/form-email-to-reset';

export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-blue-600">
      <FormEmailToReset />
    </div>
  );
}
