'use client';

import { ListItemsHero } from '@/features/home/components/list-items-hero';
import { Button } from '@/shared/components/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { AnimationTextHero } from '../../../../shared/styles/animations';

const text = ['mentorias personalizadas', 'profissionais experientes'];

export function HeroSection() {
  const router = useRouter();
  const [textHero, setTextHero] = useState(text[0]);
  const [queryMentor, setQueryMentor] = useState('');

  function textSwitch() {
    setTimeout(() => {
      if (textHero === text[0]) {
        setTextHero(text[1]);
      }
    }, 1500);

    setTimeout(() => {
      if (textHero === text[1]) {
        setTextHero(text[0]);
      }
    }, 1500);
  }

  function handleSearchMentor(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/mentores?q=${queryMentor}`);
  }

  useEffect(() => {
    textSwitch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textHero]);

  return (
    <div className="flex justify-between gap-6 py-50 px-8 relative max-[1133px]:px-4 max-[1064px]:flex-col-reverse max-[1064px]:gap-12 max-[1064px]:py-8 [&_.list-items-hero]:max-[1064px]:self-end">
      <section className="flex flex-col">
        <AnimatePresence>
          <h1 className="text-[#5D5F5D] text-[2.5rem] font-semibold leading-12 max-[438px]:text-[1.5rem] max-[438px]:leading-[1.8rem] max-[438px]:max-w-74 max-[320px]:max-w-68">
            Decole sua carreira mais rápido com
            <motion.span
              key={textHero}
              variants={AnimationTextHero}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              style={{ display: 'inline-block', color: '#003986' }}
            >
              {textHero}
            </motion.span>
          </h1>
        </AnimatePresence>

        <p className="max-w-92 text-[1.25rem] leading-7 text-[#666666] mt-14 max-[1230px]:mt-10 max-[438px]:text-[1rem] max-[438px]:text-[#323232] max-[438px]:leading-[1.4rem]">
          Tenha acesso a mentorias individuais e gratuitas com profissionais
          renomados.
        </p>

        <form
          onSubmit={handleSearchMentor}
          className="flex justify-between gap-4 rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] bg-white w-full max-w-[42.7rem] p-2 mt-auto max-[1064px]:mt-16 [&_.button-find-mentor]:max-[615px]:hidden [&_.search-form-icon.only-icon]:max-[615px]:hidden"
        >
          <div className="flex flex-1 relative">
            <input
              type="text"
              value={queryMentor}
              onChange={e => setQueryMentor(e.target.value)}
              id="query-mentor"
              className="w-full border border-[#ACACAC] rounded-lg px-4 py-2 pr-12 text-base leading-[1.4rem] text-[#323232] outline-none focus:~label:translate-y-[-2rem]"
            />
            <label
              htmlFor="query-mentor"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#323232] text-base font-normal leading-[1.4rem] bg-white transition-all duration-300 pointer-events-none hidden max-[615px]:hidden"
              style={{ display: queryMentor ? 'none' : undefined }}
            >
              Pesquisar por nome ou especialidade
            </label>
            <label
              htmlFor="query-mentor"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#323232] text-base font-normal leading-[1.4rem] bg-white transition-all duration-300 pointer-events-none hidden max-[615px]:inline"
              style={{ display: queryMentor ? 'none' : undefined }}
            >
              Encontre seu mentor
            </label>

            <MagnifyingGlass
              weight="bold"
              className="search-form-icon only-icon w-6 h-6 text-[#323232] opacity-60 absolute right-4 pointer-events-none self-center top-1/2 -translate-y-1/2"
            />
            <button
              title="Buscar mentor"
              aria-label="Buscar mentor"
              className="[all:unset] hidden leading-none cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 focus-visible:shadow-[0_0_0_2px_rgba(17,101,186,0.6)] max-[615px]:block"
            >
              <MagnifyingGlass
                weight="bold"
                className="search-form-icon w-6 h-6 text-[#323232] opacity-60"
              />
            </button>
          </div>
          <Button className="button-find-mentor">Encontre seu mentor</Button>
        </form>
      </section>

      <ListItemsHero className="list-items-hero" />
    </div>
  );
}
