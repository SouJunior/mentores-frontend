import { Suspense } from 'react';
import HomeClient from './home/HomeClient';

export default function Page() {
  return (
    <Suspense>
      <HomeClient />
    </Suspense>
  );
}
