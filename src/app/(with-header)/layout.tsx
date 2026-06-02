'use client';

import { Header } from '@/layout/header';
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
