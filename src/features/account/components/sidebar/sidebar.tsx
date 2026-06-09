'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { href: '/account/personal-info', label: 'Informações pessoais' },
  { href: '/account/profile', label: 'Perfil' },
  { href: '/account/schedule', label: 'Agenda' },
  { href: '/account/password', label: 'Senha' },
  { href: '/account/account-management', label: 'Gestão de conta' },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="flex flex-col gap-2 text-black-200">
        <h1 className="text-[2rem] font-semibold leading-[2.4rem]">
          Minha conta
        </h1>

        <div className="h-px bg-gray-600 w-full" />

        <nav className="flex flex-col gap-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-2 py-4 rounded-md text-base font-medium transition-all w-full justify-start inline-flex items-center ${
                pathname === href
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:bg-gray-100 hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
      />
    </>
  );
}
