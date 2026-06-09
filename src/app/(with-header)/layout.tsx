import { Footer } from '@/shared/layout/footer';
import { Header } from '@/shared/layout/header';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

export default async function WithHeaderLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  return (
    <>
      <Header session={session} />
      {children}
      <Footer />
    </>
  );
}
