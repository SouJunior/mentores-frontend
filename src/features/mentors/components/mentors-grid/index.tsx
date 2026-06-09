import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CardScheduling = dynamic(
  () => import('@/features/account/components/card-scheduling-mentor'),
  {
    ssr: false,
  }
);

interface MentorsGridProps {
  loading: boolean;
  mentors: IMentors[];
  mentorCalendlyInfo?: ICalendlyUserInfo[];
}

export function MentorsGrid({
  loading,
  mentors,
  mentorCalendlyInfo,
}: MentorsGridProps) {
  return (
    <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] auto-rows-max gap-7.5 max-w-7xl w-full mx-auto min-h-screen p-8 relative">
      {loading ? (
        <Image
          style={{ position: 'absolute', top: '10%', left: '45%' }}
          src={'/loading.gif'}
          alt="Loading"
        />
      ) : mentors.length > 0 ? (
        mentors &&
        Array.isArray(mentors) &&
        mentors.map((mentor: IMentors) => {
          const calendlyInfo = mentorCalendlyInfo?.find(
            info => info.mentorId === mentor.id
          );
          return (
            <CardScheduling
              key={mentor.id}
              mentorCalendlyInfo={calendlyInfo}
              mentor={mentor}
            />
          );
        })
      ) : (
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 flex flex-col items-center gap-0.75">
          <Image src={'/noresult.svg'} alt="Sem resultado" />
          <span className="text-2xl font-semibold text-[#003986] mt-2.5">
            Nada por aqui!
          </span>
          <span className="text-base text-[#666666] font-normal">
            Não conseguimos encontrar resultados pra sua busca.
          </span>
          <span className="text-base text-[#666666] font-normal">
            Tente alterar os filtros de pesquisa.
          </span>
        </div>
      )}
    </div>
  );
}
