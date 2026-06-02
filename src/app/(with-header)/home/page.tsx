import { Suspense } from 'react';
import HomeClient from './HomeClient';

export default function Page() {
  return (
    <Suspense>
      <HomeClient />
    </Suspense>
  );
}
