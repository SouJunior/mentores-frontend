import NoResult from '@/assets/noresult.svg';
import Loading from '@/assets/loading.gif';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import {
  CTASub,
  MentorsContainer,
  NoResultContainer,
  NoResultMain,
} from './styles';

const CardScheduling = dynamic(
  () => import('@/components/atoms/CardSchedulingMentor'),
  {
    ssr: false,
  }
);

interface MentorsGridProps {
  loading: boolean;
  mentors: IMentors[];
}

export function MentorsGrid({ loading, mentors }: MentorsGridProps) {
  return (
    <MentorsContainer>
      {loading ? (
        <>
          <Image
            style={{ position: 'absolute', top: '10%', left: '45%' }}
            src={Loading}
            alt="Loading"
          />
        </>
      ) : mentors.length > 0 ? (
        mentors.map((mentor: IMentors) => (
          <CardScheduling key={mentor.id} mentor={mentor} />
        ))
      ) : (
        <NoResultContainer>
          <Image src={NoResult} alt="Sem resultado" />
          <NoResultMain>Nada por aqui!</NoResultMain>
          <CTASub>Não conseguimos encontrar resultados pra sua busca.</CTASub>
          <CTASub>Tente alterar os filtros de pesquisa.</CTASub>
        </NoResultContainer>
      )}
    </MentorsContainer>
  );
}
