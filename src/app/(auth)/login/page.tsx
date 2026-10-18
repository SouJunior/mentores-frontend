import { FormLogin } from '@/features/auth/components/form-login';
import Image from 'next/image';

export default async function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 md:flex-row md:items-center md:justify-between md:py-8 md:pr-11">
      <div className="w-full md:min-w-0 md:flex-1 md:self-stretch md:overflow-hidden">
        <Image
          src={'/BackgroundFigures.svg'}
          alt="Figuras do Background"
          width={1280}
          height={720}
          priority
          className="h-auto w-full md:h-full md:w-full md:object-cover md:object-center"
        />
      </div>

      <div className="relative z-10 -mt-[15%] flex w-full justify-center px-4 pb-8 md:mt-0 md:w-auto md:justify-end md:p-0">
        <FormLogin />
      </div>
    </main>
  );
}
