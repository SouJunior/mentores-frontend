import { Session } from '@/features/auth/types/types';
import { Header } from '@/layout/header';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = async ({ children }: LayoutProps) => {
  const cookieStore = await cookies();
  const raw = cookieStore.get('session')?.value;
  const session: Session | null = raw ? JSON.parse(raw) : null;

  return (
    <>
      <Header session={session} />
      {children}
    </>
  );
};
