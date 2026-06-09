import AccountSidebar from '@/features/account/components/sidebar/sidebar';
import { parseSession } from '@/shared/utils/parse-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get('session')?.value);

  if (!session?.id) redirect('/login');

  return (
    <div className="flex gap-4 p-4 min-h-screen">
      <AccountSidebar />

      <div className="w-0.5 bg-gray-250" />

      <div className="flex-1">{children}</div>
    </div>
  );
}
