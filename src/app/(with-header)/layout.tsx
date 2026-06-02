'use client';

import { Header } from '@/components/organisms/Header';
import { ReactNode } from 'react';

export default function WithHeaderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
