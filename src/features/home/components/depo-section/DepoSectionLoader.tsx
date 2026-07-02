import { serverFetch } from '@/shared/lib/fetch';
import { ITestimony } from '@/shared/types/IUseTestimonyService';
import { DepoSection } from './index';

export async function DepoSectionLoader() {
  const testimonies = await serverFetch<ITestimony[]>('/testimony', {
    tags: ['testimonies'],
    auth: false,
  });

  return <DepoSection testimonies={testimonies} />;
}
