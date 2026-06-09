import { Suspense } from 'react';
import ConfirmacaoClient from './ConfirmacaoClient';

export default function Page() {
  return (
    <Suspense>
      <ConfirmacaoClient />
    </Suspense>
  );
}
