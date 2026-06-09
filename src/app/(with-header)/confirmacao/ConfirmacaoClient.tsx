'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export default function ConfirmacaoClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const email = searchParams.get('email');

    if (!code || !email) {
      router.push('/login');
      return;
    }

    const handleConfirmation = async () => {
      try {
        const encodedEmail = encodeURIComponent(email);
        await fetch(
          `${API_URL}/mentor/active?code=${code}&email=${encodedEmail}`,
          { method: 'PATCH' }
        );
        router.push('/login');
      } catch {
        router.push('/login');
      }
    };

    handleConfirmation();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Confirmando sua conta...</p>
    </div>
  );
}
