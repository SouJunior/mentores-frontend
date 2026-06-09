import { Header } from '@/shared/layout/header';
import { Session } from '@/shared/types/Auth';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

export default async function WithHeaderLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const raw = cookieStore.get('session')?.value;
  const session: Session | null = raw ? JSON.parse(raw) : null;

  return (
    <>
      <Header session={session} />
      {children}
    </>
  );
}
