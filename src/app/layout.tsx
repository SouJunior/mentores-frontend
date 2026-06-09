import '@/shared/lib/dayjs';
import { cn } from '@/shared/lib/utils';
import type { Metadata, Viewport } from 'next';
import { Radio_Canada } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sou Junior | Mentoria Online',
  description:
    'Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnologia',
  generator: 'Next.js',
  applicationName: 'Sou Junior',
  keywords: [
    'Sou Junior',
    'Mentoria Online',
    'Tecnologia',
    'Mentores',
    'Profissionais',
  ],
  authors: [{ name: 'Sou Junior' }],
  openGraph: {
    title: 'Sou Junior | Mentoria Online',
    description:
      'Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnologia',
    url: 'https://soujunior.com.br',
    siteName: 'Sou Junior',
    images: [
      {
        url: 'https://soujunior.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sou Junior | Mentoria Online',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sou Junior | Mentoria Online',
    description:
      'Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnologia',
    images: ['https://soujunior.com.br/og-image.png'],
  },
  abstract:
    'Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnologia',
  alternates: {
    canonical: 'https://soujunior.com.br',
  },
  creator: 'Sou Junior',
  publisher: 'Sou Junior',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  height: 'device-height',
  minimumScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={cn('font-sans', radioCanada.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
