import Loading from '@/assets/loading.gif';
import NoResult from '@/assets/noresult.svg';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
  mentorCalendlyInfo?: ICalendlyUserInfo[];
}

export function MentorsGrid({ loading, mentors, mentorCalendlyInfo }: MentorsGridProps) {
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
        mentors.map((mentor: IMentors) => {
          const calendlyInfo = mentorCalendlyInfo?.find(info => info.mentorId === mentor.id);
          return (
            <CardScheduling key={mentor.id} mentorCalendlyInfo={calendlyInfo} mentor={mentor} />
          );
        })
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
