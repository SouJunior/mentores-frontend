'use client';

import backgroundImg from '@/assets/BackgroundFigures.svg';
import { FormLogin } from '@/features/auth/form-login';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-[#175CB7]">
      <main className="flex items-center justify-between relative py-8 pr-11 w-full min-h-screen">
        <div className="w-full h-full max-w-7xl">
          <Image
            src={backgroundImg}
            alt="Figuras do Background"
            className="object-cover w-full h-full"
          />
        </div>
        <FormLogin />
      </main>
    </div>
  );
}
