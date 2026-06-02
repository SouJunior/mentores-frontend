import { Suspense } from 'react';
import MentoresClient from './MentoresClient';

export default function Page() {
  return (
    <Suspense>
      <MentoresClient />
    </Suspense>
  );
}
