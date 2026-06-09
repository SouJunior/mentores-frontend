import AccountSidebar from '@/features/account/components/sidebar/sidebar';
import { ReactNode } from 'react';

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 p-4 min-h-screen">
      <AccountSidebar />

      <div className="w-0.5 bg-gray-250" />

      <div className="flex-1">{children}</div>
    </div>
  );
}
