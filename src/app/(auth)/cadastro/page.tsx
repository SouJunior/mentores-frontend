'use client';

import { FormRegister } from '@/features/auth/components/form-register';
import Image from 'next/image';

export default function CadastroPage() {
  return (
    <div
      className="w-full h-fit pb-[36vh]"
      style={{
        background:
          'linear-gradient(303.77deg, var(--color-blue-500-a79) 34.68%, var(--color-blue-300-a79) 79.96%), linear-gradient(303.77deg, var(--color-gray-250-a0) -1.3%, var(--color-blue-500-a79) 54.57%), linear-gradient(180deg, var(--color-gray-250-a0) 0%, var(--color-blue-500-a79) 68.75%)',
      }}
    >
      <div className="h-full w-[55%]">
        <FormRegister />
        <Image
          src={'/ilustracao.svg'}
          alt="Figuras do Background"
          className="w-full h-screen object-contain"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
