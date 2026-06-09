'use client';

import { ListItemsHero } from '@/features/home/components/list-items-hero';
import { Button } from '@/shared/components/button';
import { cn } from '@/shared/lib/utils';
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
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || !!queryMentor;

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
          <h1 className="text-gray-750 flex flex-col text-[2.5rem] font-semibold leading-12 max-[438px]:text-[1.5rem] max-[438px]:leading-[1.8rem] max-[438px]:max-w-74 max-[320px]:max-w-68">
            Decole sua carreira mais rápido com
            <motion.span
              key={textHero}
              variants={AnimationTextHero}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              style={{
                display: 'inline-block',
                color: 'var(--color-blue-800)',
              }}
            >
              {textHero}
            </motion.span>
          </h1>
        </AnimatePresence>

        <p className="max-w-92 text-[1.25rem] leading-7 text-gray-700 mt-14 max-[1230px]:mt-10 max-[438px]:text-[1rem] max-[438px]:text-black-200 max-[438px]:leading-[1.4rem]">
          Tenha acesso a mentorias individuais e gratuitas com profissionais
          renomados.
        </p>

        <form
          onSubmit={handleSearchMentor}
          className="flex justify-between gap-4 rounded-lg shadow-search bg-white w-full max-w-[42.7rem] p-2 mt-auto max-[1064px]:mt-16 [&_.button-find-mentor]:max-[615px]:hidden [&_.search-form-icon.only-icon]:max-[615px]:hidden"
        >
          <div className="flex flex-1 relative">
            <input
              type="text"
              value={queryMentor}
              onChange={e => setQueryMentor(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              id="query-mentor"
              className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-12 text-base leading-[1.4rem] text-black-200 outline-none"
            />
            <label
              htmlFor="query-mentor"
              className={cn(
                'absolute left-3 bg-white transition-all duration-300 pointer-events-none px-1 max-[615px]:hidden',
                isFloating
                  ? 'top-0 -translate-y-1/2 text-xs text-blue-800'
                  : 'top-1/2 -translate-y-1/2 text-base text-black-200 font-normal leading-[1.4rem]'
              )}
            >
              Pesquisar por nome ou especialidade
            </label>
            <label
              htmlFor="query-mentor"
              className={cn(
                'absolute left-3 bg-white transition-all duration-300 pointer-events-none px-1 hidden max-[615px]:inline',
                isFloating
                  ? 'top-0 -translate-y-1/2 text-xs text-blue-800'
                  : 'top-1/2 -translate-y-1/2 text-base text-black-200 font-normal leading-[1.4rem]'
              )}
            >
              Encontre seu mentor
            </label>

            <MagnifyingGlass
              weight="bold"
              className="search-form-icon only-icon w-6 h-6 text-black-200 opacity-60 absolute right-4 pointer-events-none self-center top-1/2 -translate-y-1/2"
            />
          </div>
          <Button className="button-find-mentor">Encontre seu mentor</Button>
        </form>
      </section>

      <ListItemsHero className="list-items-hero" />
    </div>
  );
}
