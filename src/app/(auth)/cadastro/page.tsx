'use client';

import { FormRegister } from '@/features/auth/components/form-register';
import Image from 'next/image';

export default function CadastroPage() {
  return (
    <div
      className="flex min-h-screen flex-col md:flex-row"
      style={{
        background:
          'linear-gradient(303.77deg, var(--color-blue-500-a79) 34.68%, var(--color-blue-300-a79) 79.96%), linear-gradient(303.77deg, var(--color-gray-250-a0) -1.3%, var(--color-blue-500-a79) 54.57%), linear-gradient(180deg, var(--color-gray-250-a0) 0%, var(--color-blue-500-a79) 68.75%)',
      }}
    >
      <div className="w-full md:flex-1">
        <Image
          src="/ilustracao.svg"
          alt=""
          aria-hidden="true"
          width={838}   
          height={222}  
          priority
          className="w-full h-auto md:h-screen md:object-contain md:object-bottom"
        />
      </div>
      <div className="relative z-10 -mt-[40%] flex w-full justify-center px-4 pb-8 md:mt-0 md:w-[38%] md:items-center md:p-8">
        <FormRegister />
      </div>
    </div>
  );
}