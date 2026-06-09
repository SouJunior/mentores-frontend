'use client';

import { FormRegister } from '@/features/auth/components/form-register';
import Image from 'next/image';

export default function CadastroPage() {
  return (
    <div
      className="w-full h-fit pb-[36vh]"
      style={{
        background:
          'linear-gradient(303.77deg, rgba(17, 101, 186, 0.79) 34.68%, rgba(90, 156, 255, 0.79) 79.96%), linear-gradient(303.77deg, rgba(217, 217, 217, 0) -1.3%, rgba(17, 101, 186, 0.79) 54.57%), linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(17, 101, 186, 0.79) 68.75%)',
      }}
    >
      <div className="h-full w-[55%]">
        <FormRegister />
        <Image
          src={'/ilustracao.svg'}
          alt="Figuras do Background"
          className="w-full h-screen object-contain"
        />
      </div>
    </div>
  );
}
