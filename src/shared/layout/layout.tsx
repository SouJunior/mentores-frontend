import { Header } from '@/shared/layout/header';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = async ({ children }: LayoutProps) => {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  return (
    <>
      <Header session={session} />
      {children}
    </>
  );
};
