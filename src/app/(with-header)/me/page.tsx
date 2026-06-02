import { Suspense } from 'react';
import MeClient from './MeClient';

export default function Page() {
  return (
    <Suspense>
      <MeClient />
    </Suspense>
  );
}
