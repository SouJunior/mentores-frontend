import { CardOnboarding } from '@/features/home/components/card-onboarding';

export function Onboarding() {
  return (
    <div className="relative bg-[#175CB7]">
      <section
        id="onboarding"
        className="container w-full h-full py-16 px-4 text-center max-[438px]:py-10"
      >
        <h2 className="text-[2.5rem] text-white mb-4 font-semibold max-[438px]:text-[1.5rem] max-[438px]:leading-[1.8rem]">
          Conecte-se a um mentor em 4 passos
        </h2>
        <p className="description-onboarding text-white text-[1.5rem] font-semibold leading-[1.8rem] mb-12 max-[438px]:text-[1.25rem] max-[438px]:leading-6 max-[438px]:mb-6">
          com a facilidade e praticidade oferecida pelo Portal de Mentorias.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          <CardOnboarding
            title="Encontre seu mentor"
            img={'/homepage/onboarding/encontre.svg'}
          >
            Encontre seu mentor especializado na área desejada e mais adequado
            para você.
          </CardOnboarding>
          <CardOnboarding
            title="Marque um horário"
            img={'/homepage/onboarding/marque.svg'}
          >
            Marque um horário disponível na agenda do mentor, que melhor se
            encaixa para vocês.
          </CardOnboarding>
          <CardOnboarding
            title="Descreva seu objetivo"
            img={'/homepage/onboarding/descreva.svg'}
          >
            Descreva seu objetivo com a mentoria, para que o mentor possa se
            preparar.
          </CardOnboarding>
          <CardOnboarding
            title="Conecte-se"
            img={'/homepage/onboarding/encontre.svg'}
          >
            Compareça no dia e horário agendado e comece a aprender.
          </CardOnboarding>
        </div>
      </section>
    </div>
  );
}
