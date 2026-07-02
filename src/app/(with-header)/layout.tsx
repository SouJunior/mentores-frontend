import { Footer } from '@/shared/layout/footer';
import { Header } from '@/shared/layout/header';
import { SessionHydrator } from '@/shared/providers/SessionHydrator';
import { ReactNode } from 'react';

export default function WithHeaderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SessionHydrator />
      <Header />
      {children}
      <Footer />
    </>
  );
}
